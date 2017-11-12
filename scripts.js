$(() => {

  // create ref
  const ref = firebase.database().ref('messages/')

  // time in milliseconds
  const fiveMinutes = 300000

  const sendMessage = (username) => {
    // collect input
    const message = $('#message-input').val()
    // push new message ref
    let newMessage = ref.push()
    // update ref with content
    newMessage.set({
      username: username,
      content: message,
      createdAt: Date.now()
    })
    //clear input
    $('#message-input').val('')
    // force view to bottom of div
    $('#messages').scrollTop($('#messages')[0].scrollHeight)
  }

  // get current user (if exists)
  let currentUser = localStorage.getItem('username')

  // database SNAPSHOT
  ref.on('value', snapshot => {

    // delete old messages
    snapshot.forEach(snap => {
      if ((Date.now() - snap.val().createdAt) > fiveMinutes) {
        // removes old messages from db
        ref.child(snap.key).remove();
        // removes old messages from page
        $(`#${snap.key}`).remove();
      }
    })

    // clear message div
    $('#messages').empty()

    // print messages to page
    snapshot.forEach(snap => {
      let messages = snapshot.val()
      $('#messages').append(
        `<li id="${snap.key}">
          <span class="time">${moment(snap.val().createdAt).format('h:mm')}</span>
          <span class="username">${snap.val().username}</span>:
          <span class="content">${snap.val().content}</span>
        </li>`
      )
    })
  })

  $('#send-message').submit(e => {
    e.preventDefault()

    // user must be logged in to submit messages
    if (currentUser) {
      sendMessage(currentUser)
    } else {
      // if user not cached,
      // ask for name,
      // set name in local storage
      let newUsername = prompt(`Please enter a username:`)
      // must be at leaset 2 chars and less than 20
      if (newUsername.length > 1 && newUsername.length <= 20) {
        localStorage.setItem('username', newUsername)
        sendMessage(newUsername)
      } else {
        alert(`username must be between 2 and 20 characters`)
      }
    }
  })
})
