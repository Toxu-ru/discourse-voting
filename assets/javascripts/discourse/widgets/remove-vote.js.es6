import { createWidget } from 'discourse/widgets/widget';

export default createWidget('remove-vote', {
  tagName: 'div.remove-vote',

  buildClasses() {
    return 'vote-option';
  },

  html() {
    return ["Удалить голос"];
  },

  click(){
    this.sendWidgetAction('removeVote');
  }
});
