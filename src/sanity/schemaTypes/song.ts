import { defineField, defineType } from "sanity";

export const songType = defineType({
  name: "song",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "song",
      type: "file",
      options: {
        accept: "audio/*",
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
