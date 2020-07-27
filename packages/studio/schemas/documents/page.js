export default {
  name: "page",
  type: "document",
  title: "Page",
  fieldsets: [
    {
      title: "SEO",
      name: "seo",
    },
    {
      title: "Contenu",
      name: "content",
    },
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Titre",
      fieldset: "seo",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Description de la page pour les moteurs de recherche",
      fieldset: "seo",
    },
    {
      name: "openGraphImage",
      type: "image",
      title: "Image Open-Graph",
      description:
        "Image utilisée lors du partage de lien sur Facebook, Twitter etc.",
      fieldset: "seo",
    },
    {
      name: "sections",
      type: "array",
      title: "Sections",
      of: [{ type: "text" }],
      fieldset: "content",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "openGraphImage",
    },
  },
};
