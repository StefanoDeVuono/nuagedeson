Nuagedeson.Views.AudioPlayerView =  Backbone.View.extend({
  
  events: {
    'submit form.comments': 'submit_comments',
    'click div.audio_wrapper': 'play',
    'click div.comments': 'add_comment',
    'click .icon-pause': 'pause',
    'click .icon-play': 'play',
    'click .comments input': 'add_comment',
    'ended audio': 'reset'
  },

  tagname: 'div',

  className: 'audio_player',

  template: JST['clips/audio_player'],

  render: function () {
    var that = this;
    var player = that.template({
      clip: that.model,
    });
    this.commentView = new Nuagedeson.Views.CommentView({
      collection: that.model.get('comments')
    });
    
    var audioDataView = new Nuagedeson.Views.AudioDataView({
      model: that.model
    });

    audioDataView.render().$el;
    var full_player = $(player)
                    .add(this.commentView.render().$el)
                    .add(audioDataView.render().$el);

    that.$el.html( full_player );
    this.audioPlayer();
    
    return that;
  },

  add_comment: function(e){

    var that = this;
    var playPoint = e.offsetX;
    var track_pct = playPoint / this.$audioWrapper.width();
    var comment = new Nuagedeson.Models.Comment({
      clip: that.model
    });
    this.commentView.model = comment;

    if (track_pct < 0) return;

    comment.set('time', track_pct);
    comment.set('clip_id', comment.collection.clip.id)

    var $input = this.$commentBox;
    $input.focus();
  },

  submit_comments: function(event){
    var that = this;
    event.preventDefault();
    var input = $(event.currentTarget).serializeJSON();
    debugger
    this.commentView.model.save(input.comment, {
      success: function(data){
        debugger
        that.model.get('comments').add(data);
        that.commentView.render();
        that.$commentBox = that.$el.find('.comments input');
      }
    });
  },

  audioPlayer: function(){
    this.$audioWrapper = this.$el.find('.audio_wrapper');
    this.audio = this.$audioWrapper.find('audio')[0];
    this.$playHead = this.$audioWrapper.find('.play_head');
    this.$commentBox = this.$el.find('.comments input');
    this.$timer = this.$audioWrapper.find('.timer');
    this.$play_pause = this.$el.find('.play-pause');
  },

  play: function(e){
    if ( $(e.currentTarget).attr('class') === 'audio_wrapper' ) {
      var playPoint = e.offsetX;
      this.track_pct = playPoint / this.$audioWrapper.width();
      this.audio.currentTime = this.audio.duration * this.track_pct;
    } else {
      this.track_pct = this.audio.currentTime / this.audio.duration;
    }
    this.pause(e);
    this.audio.play();
    this.$play_pause.removeClass('icon-play');
    this.$play_pause.addClass('icon-pause');
    this.movePlayHead();
    this.resetPlayer(this.audio);
  },

  movePlayHead: function(){
    var that = this;
    var remaining_time = 1000 * ( this.audio.duration - this.audio.currentTime );
    var finished_dist = this.$audioWrapper.width() * this.track_pct;
    this.$playHead.width(finished_dist);
    var remaining_dist = this.$audioWrapper.width() - finished_dist;
    that.displaySongTime(that.audio.currentTime)
    this.$playHead.animate({
      width: '+=' + remaining_dist,
    }, remaining_time, 'linear').css('overflow', 'visible');
    setInterval(function(){
      that.displaySongTime(that.audio.currentTime)
    },1000);
  },

  pause: function(e){
    if (e) e.preventDefault();
    $('audio').each(function(i, player){
      player.pause();
      $('.play-pause').removeClass('icon-pause');
      $('.play-pause').addClass('icon-play');
    });
    $('.play_head').each(function(i, playHead){
      $(playHead).stop();
    });
    $('.timer').each(function(i, timer){
      $(timer).stop();
    });
  },

  displaySongTime: function(time){
    time = parseInt(time);
    var seconds = time % 60;
    seconds = (seconds < 10) ? '0' + seconds: seconds;
    var minutes = parseInt(time / 60) % 60;
    minutes = (minutes < 10) ? '0' + minutes: minutes;
    var hours = parseInt(time / 3600);
    if (hours < 1) {
        time = parseInt(minutes) + ':' +  seconds;
      } else {
        times = hours + ':' + minutes + ':' + seconds;
      }
    this.$timer.text(time);
  },

  resetPlayer: function(audio, playHead){
    var that = this;
    $(audio).on('ended', function(){
      that.track_pct = 0;
      that.audio.currentTime = 0;
      that.$playHead.width(0);
      that.pause();
    });
  },

  loadClip: function(audio, background){
    /* get bk height, width
       clip: rect(0px, width, height, from 0 to width);
       as $('audio').on('canplaythrough') fires
    */
  }

});