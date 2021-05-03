import firebase from "firebase";

export function databaseRead(dbRef: string): Array<any> {
  const shopItems = firebase.database().ref(dbRef);
  shopItems.on("value", (snapshot: any) => {
    const items = snapshot.val();
    const listArray = [];
    for (let id in items) {
      listArray.push(items[id]);
    }
    debugger;
    return(listArray);
  });
  return [];
} 