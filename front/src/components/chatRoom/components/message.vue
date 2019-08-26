<template>
<div>
  <div :class="['message','message--'+ userMessage.type]" >
    <div class="message__wrapp">
      <span class="message__auhtor">{{userMessage.name}}</span>
      <span class="message__text">{{userMessage.messages}}</span>
      <span class="message__date">{{userMessage.date}}</span>
    </div>
    <div class="message__avatar">
      <!-- <img src="~@/assets/avatar/1.svg" alt=""> -->
    </div>

  </div>
</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import UserMessage from '../../../model/userMessage';
@Component({
  props: {
    userMessage: {
      type: Object,
    },
  },
})
export default class Message extends Vue {

}
</script>
<style>
  .message {
    margin-bottom: 30px;
  }
  .message .message__wrapp{
    position: relative;
    max-width: 300px;
    padding: 10px 20px 10px 10px;
    border-radius: 5px;
  }
  .message .message__wrapp::after{
    content: '';
    position: absolute;
    width: 19px;
    height: 19px;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .message--mine .message__wrapp{  
    margin-left: auto;
    margin-right: 58px;
    background-color: var(--myMessageBack);
    color: var(--myMessageFont);
  }
  .message--mine .message__wrapp::after{
    bottom: -7px;
    right: -8px;
    background-image:  url('~@/assets/shape.svg');
    background-size: auto;
  }
  .message--mine .message__avatar {
    margin-top: 10px;
    margin-left: auto;
    margin-right: 10px;
  }
  #app[data-theme='dark'] .message--mine .message__wrapp::after{
    background-image:  url('~@/assets/shapedark.svg');
  }

  .message__date{
    display: block;
    font-size: 10px;

    text-align: right;
    margin-left: auto;
  }
  .message--frinds .message__wrapp{
    margin-left: 58px;
    margin-right: auto;
    background-color: var(--theirMessageBack);
    color: var(--theirMessage);
  }
  .message--frinds .message__avatar {
    margin-top: 10px;
    margin-left: 10px;
    margin-right: auto;
  }
  .message--frinds .message__wrapp::after{
    background-image:  url('~@/assets/shapespecular.svg');
    bottom: -5px;
    left: -3px;
  }
  #app[data-theme='dark'] .message--frinds .message__wrapp::after{
    background-image:  url('~@/assets/shapespeculardark.svg');
  }
  .message__auhtor{
    display: block;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .message__text{
    font-size: 11px;
    letter-spacing: 1.5px;
    word-break: break-all;
  }
  .message__avatar{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ffffff;
  }
</style>
