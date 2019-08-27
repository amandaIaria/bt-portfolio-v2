/* eslint-disable import/prefer-default-export */
/**
 * @class
 * @classdesc Containing method for the contact form.
 *
 * @method sendMessage
 * @param {event} e
 * Sends the message
 *
 * @method gatherMessage
 * @param {event} e
 * gathers the message and places it into the correct format.
 */

export function Contact() {
  const send = process.env.URL;

  this.sendMessage = (e) => {
    const
      url = `${send}api/contact`,
      message = this.gatherMessage(e);
    console.log(message);
    fetch(url,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      })
      .then(resp => resp.json())
      .then(response => console.log('promise ', response))
      .catch(err => console.log('err', err));
  };

  this.gatherMessage = (e) => {
    return e.target[0].value;
  };
}
