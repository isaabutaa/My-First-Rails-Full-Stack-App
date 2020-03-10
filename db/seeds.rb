# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(
    name: "Grandma Pat",
    title: "CEO",
    position: "CEO",
    direct_reports: [
        {
            name: "Ma",
            position: "COO",
            direct_reports: [
                {
                    name: "Jess",
                    position: "daughter",
                    direct_reports: ["none"]
                },
                {
                    name: "Tarik",
                    position: "son",
                    direct_reports: ["none"]
                },
                {
                    name: "Isa",
                    position: "son",
                    direct_reports: ["none"]
                }
            ]
        }
    ]
)