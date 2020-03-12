# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(
    first_name: "Dade",
    last_name: "Murphy",
    title: "CEO",
    manager_id: nil
)

User.create(
    first_name: "Kate",
    last_name: "Libby",
    title: "CTO",
    manager_id: "1"
)

User.create(
    first_name: "Edward",
    last_name: "Vedder",
    title: "CFO",
    manager_id: "1"
)

User.create(
    first_name: "Margo",
    last_name: "Wallace",
    title: "VP of Public Relations",
    manager_id: "1"
)

User.create(
    first_name: "Eugene",
    last_name: "Belfort",
    title: "VP of Engineering",
    manager_id: "2"
)

User.create(
    first_name: "Richard",
    last_name: "Gill",
    title: "Public Relations Manager",
    manager_id: "4"
)

User.create(
    first_name: "Emmanuel",
    last_name: "Goldstein",
    title: "Lead Software Engineer",
    manager_id:"5"
)

User.create(
    first_name: "Paul",
    last_name: "Cook",
    title: "Software Engineer",
    manager_id: "5"
)

User.create(
    first_name: "Joey",
    last_name: "Pardella",
    title: "Junior Software Engineer",
    manager_id: "8"
)

User.create(
    first_name: "Agnes",
    last_name: "Pardella",
    title: "Project Manager",
    manager_id: "4"
)

User.create(
    first_name: "Ramon",
    last_name: "Sanches",
    title: "Software Engineer",
    manager_id: "8"
)