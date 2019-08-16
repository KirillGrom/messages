<template>
<div>
  <div :class="['message','message--'+userMessage.type]" >
    <span class="message__auhtor">{{userMessage.name}}</span>
    <span class="message__text">{{userMessage.messages}}</span>
    <span class="message__date">{{userMessage.date}}</span>
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
  // @Prop() public userMessage:any;

}
</script>
<style>
  .message{
    position: relative;
    max-width: 300px;
    margin-bottom: 30px;
    padding: 25px 20px;
    border-radius: 5px;

    
  }
  .message::after{
    content: '';
    position: absolute;
    width: 19px;
    height: 19px;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .message--mine{
    margin-left: auto;
    margin-right: 10px;
    background-color: var(--myMessageBack);
    color: var(--myMessageFont);
  }
  .message--mine::after{
    bottom: -7px;
    right: -8px;
    background-image:  url('~@/assets/shape.svg');
    background-size: auto;
  }
  #app[data-theme='dark'] .message--mine::after{
    background-image:  url('~@/assets/shapedark.svg');
  }
  .message--frinds{
    margin-left: 10px;
    margin-right: auto;
    background-color: var(--theirMessageBack);
    color: var(--theirMessage);
  }
  .message--frinds::after{
    background-image:  url('~@/assets/shapespecular.svg');
    bottom: -5px;
    left: -3px;
  }
  #app[data-theme='dark'] .message--frinds::after{
    background-image:  url('~@/assets/shapespeculardark.svg');
  }

</style>
