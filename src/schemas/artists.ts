export default {
    name: 'artist',
    title: 'Artist',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string' },
      { name: 'bio', title: 'Bio', type: 'text' },
      { name: 'photo', title: 'Photo', type: 'image' },
      { 
        name: 'artworks',
        title: 'Artworks',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'artwork' }] }]
      }
    ]
  };