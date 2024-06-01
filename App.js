import {
  faMagnifyingGlass,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.intro}>
        <View>
          <Text style={{ fontSize: 34, fontWeight: "bold" }}>Hello, Devs</Text>
          <Text>14 tasks today</Text>
        </View>
        <View style={styles.userIcon}>
          <Image source={require("./assets/person.png")} />
        </View>
      </View>
      <View style={styles.searchBar}>
        <View style={styles.searchInput}>
          <FontAwesomeIcon size={20} icon={faMagnifyingGlass} />
          <TextInput style={styles.input} placeholder="Search" />
        </View>
        <View style={styles.filter}>
          <FontAwesomeIcon size={30} color="#fff" icon={faSliders} />
        </View>
      </View>
      <View style={styles.categories}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Categories</Text>
      </View>
      <ScrollView style={styles.ScrollView} horizontal={true}>
        <View style={styles.item}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Exercise</Text>
            <Text>12 Tasks</Text>
          </View>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("./assets/man-running.png")}
          />
        </View>
        <View style={styles.item}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Study</Text>
            <Text>2 Tasks</Text>
          </View>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("./assets/studying.png")}
          />
        </View>
        <View style={styles.item}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Code</Text>
            <Text>4 Tasks</Text>
          </View>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("./assets/coding.png")}
          />
        </View>
        <View style={styles.item}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Eat</Text>
            <Text>4 Tasks</Text>
          </View>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("./assets/food.webp")}
          />
        </View>
        <View style={styles.item}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Play video games
            </Text>
            <Text>4 Tasks</Text>
          </View>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("./assets/joystick.png")}
          />
        </View>
        <View style={styles.item}>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Cook
            </Text>
            <Text>4 Tasks</Text>
          </View>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("./assets/cooking.png")}
          />
        </View>
        <View style={styles.item}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Lectures</Text>
            <Text>4 Tasks</Text>
          </View>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("./assets/presentation.png")}
          />
        </View>
        <View style={styles.item}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Meeting</Text>
            <Text>4 Tasks</Text>
          </View>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("./assets/videoconference.png")}
          />
        </View>
      </ScrollView>
      <View style={styles.taskTitle}>
        <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 10 }}>
          Ongoing Task
        </Text>
        <ScrollView style={styles.tasks}>
          <View style={styles.task}>
            <Text style={{ marginLeft: 9, fontSize: 19, fontWeight: "bold" }}>
              Breakfast
            </Text>
          </View>
          <View style={styles.task}>
            <Text style={{ marginLeft: 9, fontSize: 19, fontWeight: "bold" }}>
              Work on assigments
            </Text>
          </View>
          <View style={styles.task}>
            <Text style={{ marginLeft: 9, fontSize: 19, fontWeight: "bold" }}>
              Wash dishes
            </Text>
          </View>
          <View style={styles.task}>
            <Text style={{ marginLeft: 9, fontSize: 19, fontWeight: "bold" }}>
              Play video game
            </Text>
          </View>
          <View style={styles.task}>
            <Text style={{ marginLeft: 9, fontSize: 19, fontWeight: "bold" }}>
              Lunch
            </Text>
          </View>
          <View style={styles.task}>
            <Text style={{ marginLeft: 9, fontSize: 19, fontWeight: "bold" }}>
              Do chores
            </Text>
          </View>
          <View style={styles.task}>
            <Text style={{ marginLeft: 9, fontSize: 19, fontWeight: "bold" }}>
              Cook
            </Text>
          </View>
          <View style={styles.task}>
            <Text style={{ marginLeft: 9, fontSize: 19, fontWeight: "bold" }}>
              Update portfolio
            </Text>
          </View>
          <View style={styles.task}>
            <Text style={{ marginLeft: 9, fontSize: 19, fontWeight: "bold" }}>
              Workout
            </Text>
          </View>
          <View style={styles.task}>
            <Text style={{ marginLeft: 9, fontSize: 19, fontWeight: "bold" }}>
              Take a nap
            </Text>
          </View>
          <View style={styles.task}>
            <Text style={{ marginLeft: 9, fontSize: 19, fontWeight: "bold" }}>
              Study
            </Text>
          </View>
          <View style={styles.task}>
            <Text style={{ marginLeft: 9, fontSize: 19, fontWeight: "bold" }}>
              Work on flutter project
            </Text>
          </View>
          <View style={styles.task}>
            <Text style={{ marginLeft: 9, fontSize: 19, fontWeight: "bold" }}>
              Learn Java
            </Text>
          </View>
          <View style={styles.task}>
            <Text style={{ marginLeft: 9, fontSize: 19, fontWeight: "bold" }}>
              Read Manga
            </Text>
          </View>
          <View style={styles.task}>
            <Text style={{ marginLeft: 9, fontSize: 19, fontWeight: "bold" }}>
              Supper
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
    padding: 20,
  },
  intro: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userIcon: {
    backgroundColor: "#FBF9F7",
    borderRadius: 50,
    padding: 2,
  },
  searchBar: {
    marginTop: 20,
    height: 50,
    flexDirection: "row",
  },
  searchInput: {
    borderRadius: 10,
    paddingLeft: 10,
    maxHeight: 100,
    backgroundColor: "#FBF9F7",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 20,
    marginLeft: 9,
    fontWeight: "bold",
  },
  filter: {
    marginLeft: 16,
    borderRadius: 10,
    backgroundColor: "#F0522F",
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  categories: {
    marginTop: 20,
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    borderRadius: 20,
    marginTop: 9,
    padding: 15,
    backgroundColor: "#FBF9F7",
    width: 160,
  },
  ScrollView: {
    maxHeight: 190,
  },
  taskTitle: {
    marginTop: 20,
  },
  tasks: {
    maxHeight: 300,
  },
  task: {
    marginTop: 10,
    borderRadius: 15,
    padding: 40,
    paddingLeft: 8,
    paddingRight: 0,
    backgroundColor: "#FBF9F7",
    borderWidth: 1,
    borderColor: "#E8D1BA",
    borderStyle: "solid",
  },
});
