Nuagedeson.Models.Clip = Backbone.RelationalModel.extend({
  relations: [{
    type: Backbone.HasMany,
    key: 'comments',
    relatedModel: 'Nuagedeson.Models.Comment',
    collectionType: 'Nuagedeson.Collections.Comments',
    reverseRelation: {
      key: 'clip',
      includeInJSON: 'id'
    }
  }]
});
