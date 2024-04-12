
import { View, Text, StyleSheet, FlatList } from "react-native";
import Card from "../components/Card";
import { FeedItem } from "../types/Feed";

const Home = () => {
  const posts: FeedItem[] = [
    {
      id: "1",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6A1baG-P8263Ugs5F2fWlSY1oYHQDzSh5yg&usqp=CAU",
      username: "Thales La corte",
      content: "Sei la",
      image: "https://source.unsplash.com/random",
      likes: 1000,
      reposts: 500,
      comments: 100,
    },
    {
      id: "2",
      avatar: "https://uploads.metropoles.com/wp-content/uploads/2021/02/05155205/WhatsApp-Image-2021-02-04-at-22.39.03-1.jpg",
      username: "Ana Julia Camargo",
      content: "Odeio Los Hermanos",
      image: "https://images-americanas.b2w.io/produtos/2471279722/imagens/dvd-los-hermanos-esse-e-so-comeco-do-fim-de-nossa-vida/2471279722_1_large.jpg",
      likes: 1,
      reposts: 5,
      comments: 10,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <Card
            id={item.id}
            avatar={item.avatar}
            username={item.username}
            content={item.content}
            image={item.image}
            likes={item.likes}
            reposts={item.reposts}
            comments={item.comments}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 60,
    marginVertical: 10,
    fontWeight: "bold",
  },
});

export default Home;
