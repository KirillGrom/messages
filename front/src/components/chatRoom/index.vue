<template>
    <div class="chat-room">
      <div class="chat-room__history-selectable">
        <Message
          v-for=" (messange, index) in store.getMessages"
          :key="index"
          :userMessage="messange"
        />
      </div>
      <div class="chat-room__panel">
      <form
        v-on:submit.prevent="submitMessages"
        v-on:keyup.enter="submitMessages"
        action=""
        class="form-message">
        <textarea
          v-model="textMessages"
          placeholder="Message"
          class="form-message__text"
          type="text">
        </textarea>
        <button
        class="form-message__button"
        type="submit">
          Send
        </button>
      </form>
      </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserMessage from '../../model/userMessage';
import Message from './components/message.vue';
import { useStore } from "vuex-simple";

@Component({
  name: 'ChatRoom',
  components: {
    Message,
  },
})
export default class ChatRoom extends Vue {
  private chartMessanges: object[] = [];

  private textMessages: string= '';

  private store: Socket = useStore(this.$store);

  submitMessages(): void {
    if (this.textMessages.length > 0) {
      const message = {
        text: this.textMessages,
        date: '',
        type: 'mine',
      };
      const user = this.store.getUser;
      const sendMessage = new UserMessage(message, user).changeType('frinds');
      this.$socket.emit('newMessage', sendMessage, (data) => {
        if (data === 'string') {
          console.error(data);
        } else {
          this.textMessages = '';
          this.store.socket_asyncNewMessage(new UserMessage(message, user));
        }
      });
    }
  }
}
</script>
<style>
.chat-room{
  width: 800px;
  height: 700px;
  border: 10px solid var(--bordorColor);
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 17px;
  background-color: var(--chatRoomBack);
}
.chat-room__history-selectable{
  max-height: 600px;
  padding: 10px 0 10px 0;
  overflow: scroll;
}
.chat-room__panel{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 92px;
  padding: 10px;
  background-color: var(--messagerPanel)
}
.chat-room__panel .form-message {
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-message__text{
  width: 550px;
  height: 71px;
  padding: 10px 15px 0 15px;
  border-radius: 11px;
  border: none;
  outline: none;
  resize: none;
  box-shadow: 0 0 4px var(--myMessageBack);
}
.form-message__button{
  width: 50px;
  height: 50px;
  margin-left: 10px;
  color: var(--colorButton);
  font-size: 14px;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
}
.form-message__button:focus, .form-message__button:active{
  box-shadow: inset 0 0 6px var(--shadowSubmit);
}
</style>
