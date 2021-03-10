<template>
  <div class="vr-msgbox" v-show="visible" :style="{width:modalWidth,height:modalHeight,textAlign:center?'center':'left'}">
      <div class="vr-msgbox-header">
        <div class="vr-msgbox-title">{{ title }}</div>
        <span class="vr_icon_close close_modal" @click="handleAction('cancel')"></span>
      </div>
      <div class="vr-msgbox-content" >
        <div v-if="message !== ''" class="vr-msgbox-message">
          <slot>
            <div v-html="message"></div>
          </slot>
        </div>
        <div class="vr-msgbox-input" v-show="showInput">
          <input v-model="inputValue" :placeholder="inputPlaceholder" ref="input">
          <div class="vr-msgbox-errormsg" :style="{ visibility: !!editorErrorMessage ? 'visible' : 'hidden' }">{{ editorErrorMessage }}</div>
        </div>
      </div>
      <footer class="vr-msgbox-footer" :style="{textAlign:center?'center':'right'}">
        <yu-button class="mr20" v-show="showCancelButton" @click="handleAction('cancel')">{{ cancelButtonText }}</yu-button>
        <yu-button type="primary" v-show="showConfirmButton" @click="handleAction('confirm')">{{ confirmButtonText }}</yu-button>
      </footer>
    </div>
</template>

<script>
  let CONFIRM_TEXT = '确定';
  let CANCEL_TEXT = '取消';
  // import Popup from '../../src/utils/popup';
  // import '../../src/utils/popup/popup.css';
  export default {
    // mixins: [ Popup ],
    props: {
      modal: {
        default: true
      },
      showClose: {
        type: Boolean,
        default: true
      },
      lockScroll: {
        type: Boolean,
        default: true
      },
      closeOnClickModal: {
        default: true
      },
      closeOnPressEscape: {
        default: true
      },
      inputType: {
        type: String,
        default: 'text'
      }
    },
    methods: {
      handleAction(action) {
        if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
          return;
        }
        if (typeof this.beforeClose === 'function' && action==="confirm") {
          this.beforeClose(this, this.done(action));
        } else {
          
          this.doClose();
          this.callback(action)
        }
      },
      done(action){
        return (()=>{
          this.close();
          this.callback(action) 
        } )
      },
      validate() {
        if (this.$type === 'prompt') {
          var inputPattern = this.inputPattern;
          if (inputPattern && !inputPattern.test(this.inputValue || '')) {
            this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
            this.$refs.input.classList.add('invalid');
            return false;
          }
          var inputValidator = this.inputValidator;
          if (typeof inputValidator === 'function') {
            var validateResult = inputValidator(this.inputValue);
            if (validateResult === false) {
              this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
              this.$refs.input.classList.add('invalid');
              return false;
            }
            if (typeof validateResult === 'string') {
              this.editorErrorMessage = validateResult;
              return false;
            }
          }
        }
        this.editorErrorMessage = '';
        this.$refs.input.classList.remove('invalid');
        return true;
      },
      handleInputType(val) {
        if (val === 'range' || !this.$refs.input) return;
        this.$refs.input.type = val;
      }
    },
    watch: {
      inputValue() {
        if (this.$type === 'prompt') {
          this.validate();
        }
      },
      visible(val) {
        this.handleInputType(this.inputType);
        if (val && this.$type === 'prompt') {
          this.editorErrorMessage = '';
          this.$refs.input.classList.remove('invalid');
          setTimeout(() => {
            if (this.$refs.input) {
              this.$refs.input.focus();
            }
          }, 500);
        }
      },
      inputType(val) {
        this.handleInputType(val);
      }
    },
    data() {
      return {
        visible:false,
        title: '',
        message: '',
        type: '',
        center:'',
        modalWidth:"420px",
        modalHeight:"auto",
        showInput: false,
        inputValue: null,
        inputPlaceholder: '',
        inputPattern: null,
        inputValidator: null,
        inputErrorMessage: '',
        showConfirmButton: true,
        showCancelButton: false,
        confirmButtonText: CONFIRM_TEXT,
        cancelButtonText: CANCEL_TEXT,
        editorErrorMessage: null,
        callback: null
      };
    }
  };
</script>
<style lang="scss">

</style>