'use strict';

module.exports = function(app, mongoose) {
    var LinkSchema = new mongoose.Schema({
        maker : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        shortlink: String,
        fulllink: String,
        hits: {type: Number, default : 0}
    });

    LinkSchema.plugin(require('./plugins/pagedFind'));
    LinkSchema.index({ maker: 1 });
    LinkSchema.index({ shortlink: 1 });
    LinkSchema.set('autoIndex', (app.get('env') === 'development'));
    app.db.model('Link', LinkSchema);

};

