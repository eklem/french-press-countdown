Vue.filter('two_digits', function (value) {
  if(value.toString().length <= 1)
  {
    return "0"+value.toString();
  }
  return value.toString();
})

var vm = new Vue({
  el: '#app',
  props : {
    date : {
      type: Number,
      coerce: str => Math.trunc(Date.parse(str) / 1000)
    }
  },
  data() {
    return {
      ended: false,
      now: Math.trunc((new Date()).getTime() / 1000),
      finished: Math.trunc((new Date()).getTime() / 1000 + 2)
    }
  },
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000);
    },1000);
  },
  computed: {
    end() {
      if (Math.trunc(this.finished - this.now) <= 0) {
        Vue.set(vm, 'ended', true)
      }
    },
    seconds() {
      return (this.finished - this.now);
    },
    minutes() {
      return Math.trunc((this.finished - this.now) / 60) % 60;
    }
  }
})
