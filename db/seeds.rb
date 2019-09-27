50.times do 
  name = Faker::Artist.name 
  interests = Faker::Movies::StarWars.wookie_sentence
  location = Faker::Address.state
  avatar = Faker::Avatar.image(slug: name, size: "100x400", format: "png", set: "set1")
  Friend.create(name: name, interests: interests, location: location, avatar: avatar )
end

puts "50 Friends Seeded"