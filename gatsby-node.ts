exports.createSchemaCustomization = ({ actions }: { actions: any }) => {
  const { createTypes } = actions
  const typeDefs = `
        type MarkdownRemark implements Node {
            frontmatter: Frontmatter
        }

        type Frontmatter {
            ambition: String
            ambitions: [String]
            title: String
            subtitle: String
            section: String
            link: String
            text: String
            subtitle: String
            image: String
            extra: String
            date: String
            tag: String
            boldpart: String
            name: String
            animation: String
            thema: [String!]
        }
    `
  createTypes(typeDefs)
}
