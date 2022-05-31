exports.createSchemaCustomization = ({ actions }: {actions: any}) => {
    const { createTypes } = actions
    const typeDefs = `
        type MarkdownRemark implements Node {
            frontmatter: Frontmatter
        }

        type Frontmatter {
            ambition: [String!]
            title: String
            link: String
            text: String
            subtitle: String
            image: String
            extra: String
            date: String
        }
    `
    createTypes(typeDefs)
}