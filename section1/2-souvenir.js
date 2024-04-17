let souvenirs = [];

while (true) {
  let answer = prompt('Do you wish to enter a new souvenir? ');

  if (answer[0] == 'y') {
    let newItem = [];

    try {
      newItem.push(prompt("Please enter your item's name: "));
      newItem.push(parseFloat(prompt("Please enter your item's price: ")));
      newItem.push(
        Boolean(
          prompt("Is your item available? Please enter 'true' or 'false': ")
        )
      );
      souvenirs.push(newItem);
    } catch (error) {
      console.log(
        'Seems like you enter an invalid data, please try again :c',
        error
      );
    }
  } else {
    break;
  }
}
