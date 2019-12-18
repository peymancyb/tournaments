const mapFinalData = documents =>
  documents
    .map(category =>
      category.documents.map(docs => ({
        id: docs.id,
        title: docs.title,
        description: docs.description,
        images: docs.images
      }))
    )
    .flatMap(item => [...item]);

export default mapFinalData;
