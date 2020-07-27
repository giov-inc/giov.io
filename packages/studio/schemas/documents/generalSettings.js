import bcp47 from "bcp47";

export default {
  name: "general-settings",
  type: "document",
  title: "Paramètres généraux",
  fieldsets: [{ name: "footer", title: "Pied de page" }],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Titre du site",
    },
    {
      title: "URL du site",
      name: "url",
      type: "url",
      description: `Adresse principale du site`,
    },
    {
      name: "frontpage",
      type: "reference",
      title: `Page d'accueil`,
      to: { type: "page" },
    },
    {
      title: "Langue du site",
      description:
        "Doit être un code de langue valide - https://www.w3.org/International/articles/language-tags/",
      name: "lang",
      type: "string",
      validation: (Rule) =>
        Rule.custom((lang) =>
          bcp47.parse(lang) ? true : "Veuillez utiliser un code bcp47 valide"
        ),
    },
    {
      title: "Logo",
      description: `Utiliser de préférence un logo SVG où la couleur est définie par l'attribut currentColor`,
      name: "logo",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative textuelle",
          description: `Important pour la SEO et l'accessiblité.`,
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      title: "Navigation principale",
      name: "mainNavigation",
      description:
        "Sélectionnez les pages à afficher dans la navigation principale",
      validation: (Rule) => [
        Rule.max(5).warning(
          `Il est généralement déconseillé d'afficher plus de 5 liens dans la navigation principale`
        ),
        Rule.unique().error(
          "Vous avez sélectionné plusieurs fois le même lien"
        ),
      ],
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "route" }],
        },
      ],
    },
    {
      title: "Navigation de pied de page",
      name: "footerNavigation",
      type: "array",
      validation: (Rule) => [
        Rule.max(10).warning(
          `Il est généralement déconseillé d'afficher plus de 10 liens dans la navigation du pied de page`
        ),
        Rule.unique().error(
          "Vous avez sélectionné plusieurs fois le même lien"
        ),
      ],
      fieldset: "footer",
      of: [
        {
          type: "reference",
          to: [{ type: "route" }],
        },
      ],
    },
    {
      title: "Contenu de pied de page",
      name: "footerText",
      type: "text",
      fieldset: "footer",
    },
  ],
};
