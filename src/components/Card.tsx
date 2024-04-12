import { StyleSheet, Text, View } from "react-native";
import { FeedItem } from "../types/Feed";
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Card as GalioCard } from 'galio-framework';
import { AntDesign } from '@expo/vector-icons';

const Card = ({
  avatar,
  username,
  content,
  image,
  likes,
  reposts,
  comments,
}: FeedItem) => {
  return (
    <View style={styles.container}>
      <GalioCard
        style={{ padding: 20 }}
        flex
        borderless
        avatar={avatar}
        title={username}
        imageStyle={{ width: 200 }}
        image={image}
        footerStyle={{ gap: 30 }}
      >
        <Text>{content}</Text>
        <View style={styles.barraBotoes}>
          <View style={styles.botoes}><Feather name="heart" size={24} color="black" /></View>
          <Text>{likes}</Text>

          <View style={styles.botoes}><Fontisto name="comment" size={21.5} color="black" /></View>
          <Text>{comments}</Text>
          <View style={styles.botoes}><AntDesign name="retweet" size={24} color="black" /></View>
          <Text>{reposts}</Text>
        </View>
      </GalioCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderWidth: 2,
    borderColor: "purple",
    backgroundColor: "white",
    width: '100%'
  },
  title: {
    fontSize: 20, // Reduzi o tamanho da fonte para evitar que o nome fique muito grande
    marginVertical: 5, // Ajustei a margem vertical para um espaçamento mais adequado
    fontWeight: "bold", // Adicionei negrito ao nome para destacá-lo
  },
  barraBotoes: {
    flexDirection: 'row',
    justifyContent:"flex-start"
  },
  botoes:{
marginRight: 4,
marginLeft: 4,
  },
  avatar: {
    width: 63,
    height: 64,
    borderRadius: 32,
    marginRight: 10,
  },
  subtitle: {
    fontSize: 40,
  },
});

export default Card;