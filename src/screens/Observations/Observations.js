import React, { PureComponent } from 'react';
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import Observation from "./Observation";
import { ObservationService } from "api";

import { translate } from "../../i18n";
import { styles } from "./styles";

const service = new ObservationService();
export default class Observations extends PureComponent {
  constructor() {
    super();

    this.state = {
      observations: [],
      loading: true
    }
  }
  componentDidMount() {
    service.getObservations()
      .then(response => {
        this.setState({
        observations: response.content,
        loading: false
        })
      })
      .catch(err => console.log(err));
  }

  addObservation = () => {
    this.props.navigation.navigate("AddObservation");
    this.setState({
      observations: [
        {
          "id": "ed4fe805-8745-4df0-b9b8-50905b40fc45",
          "ringMentioned": "CYC",
          "photos": null,
          "distance": 41293,
          "direction": 15,
          "elapsedTime": 59779,
          "colorRing": "inventore quia culpa",
          "date": "Fri Jun 21 2019 17:59:04 GMT+0300 (Moscow Standard Time)",
          "latitude": null,
          "longitude": null,
          "placeName": "Мозырь, Беларусь",
          "remarks": "Была на дереве",
          "verified": true,
          "ring": {
          "id": "b01e19fc-46b9-4919-b502-6dba523b9c72",
          "identificationNumber": "CYC-3428",
          "latitude": null,
          "longitude": null,
          "date": "Fri Jun 21 2019 17:59:04 GMT+0300 (Moscow Standard Time)",
          "ringingScheme": {
            "id": "CYC",
            "status": null,
            "country": "Мозырь",
            "center": "Utah"
          },
        "primaryIdentificationMethod": {
          "id": "R0",
          "desc_eng": "Dolores rerum quo voluptas architecto corrupti aut odit recusandae velit.",
          "desc_rus": "Enim consequatur et consequatur.",
          "desc_byn": "Distinctio quae sit esse quis."
        },
        "verificationOfTheMetalRing": {
          "id": 1,
          "desc_eng": "Nam debitis officia qui asperiores ab reiciendis eum eos.",
          "desc_rus": "Perferendis quisquam sunt temporibus eos ipsum similique.",
          "desc_byn": "Et dicta nam quaerat molestiae libero aspernatur tempora incidunt."
        },
        "metalRingInformation": {
          "id": 1,
          "desc_eng": "Laudantium aut odit natus.",
          "desc_rus": "Qui ea aut ut.",
          "desc_byn": "Officia ea architecto veritatis sunt tempora minus ducimus quas."
        },
        "otherMarksInformation": {
          "id": "CB",
          "desc_eng": "Minus quas aut dolorum.",
          "desc_rus": "Culpa non quia.",
          "desc_byn": "Alias dolores voluptas qui voluptatem culpa."
        },
        "speciesMentioned": {
          "id": "00007",
          "letterCode": "SRTGSK",
          "species": "сибирская гага",
          "ordo": "et",
          "family": "minus quis atque",
          "desc_eng": null,
          "desc_rus": null,
          "desc_byn": null
        },
        "speciesConcluded": {
          "id": "00081",
          "letterCode": "NRPYCO",
          "species": "сибирская гага",
          "ordo": "sit",
          "family": "quasi dolorem pariatur",
          "desc_eng": null,
          "desc_rus": null,
          "desc_byn": null
        },
        "manipulated": {
          "id": "U",
          "desc_eng": "Officiis fugit est qui et tenetur accusantium voluptas fugiat.",
          "desc_rus": "Omnis ipsam natus inventore nemo dolore dicta incidunt autem.",
          "desc_byn": "Assumenda qui et ut beatae voluptas."
        },
        "movedBeforeTheCapture": {
          "id": 6,
          "desc_eng": "Qui nihil saepe tenetur quis maxime.",
          "desc_rus": "Ad in fugit ipsam quis dignissimos corrupti voluptas iusto dolorem.",
          "desc_byn": "Nihil facilis aut temporibus error asperiores."
        },
        "catchingMethod": {
          "id": "R",
          "desc_eng": "Voluptatibus mollitia tenetur fuga quasi.",
          "desc_rus": "Minima ut est mollitia aut eveniet quaerat molestiae.",
          "desc_byn": "Deleniti eaque dignissimos nemo fugiat nulla est eveniet sit."
        },
        "catchingLures": {
          "id": "N",
          "desc_eng": "Qui maxime aliquid omnis omnis voluptas earum tempora itaque.",
          "desc_rus": "Odio suscipit omnis possimus minus aut veniam.",
          "desc_byn": "Ut eum voluptatem ratione et incidunt commodi ut pariatur."
        },
        "sexMentioned": {
          "id": "Женский",
          "desc_eng": "Quia id omnis est ea aut aut magnam porro.",
          "desc_rus": "Женский",
          "desc_byn": "Dolores architecto ut consequatur illo adipisci."
        },
        "sexConcluded": {
          "id": "Женский",
          "desc_eng": "Molestias dolorem optio enim sed quia quo quasi.",
          "desc_rus": "Voluptas modi delectus ex quo et commodi.",
          "desc_byn": "Quae enim error."
        },
        "ageMentioned": {
          "id": "2",
          "desc_eng": "Beatae dolor laborum commodi.",
          "desc_rus": "Voluptatem quis aut quis voluptatem sed ut iusto et.",
          "desc_byn": "Error odit repellat."
        },
        "ageConcluded": {
          "id": "2",
          "desc_eng": "Consequatur totam esse error reprehenderit dolor quaerat qui totam.",
          "desc_rus": "Fuga accusamus praesentium rem cumque quis.",
          "desc_byn": "Provident eos eum voluptas."
        },
        "status": {
          "id": "L",
          "desc_eng": "In in cupiditate dolorem hic quos aliquid sed optio.",
          "desc_rus": "Magni sit rerum ipsa asperiores neque cupiditate quidem.",
          "desc_byn": "Aliquid et distinctio."
        },
        "broodSize": {
          "id": "15",
          "desc_eng": "Quos et corporis ut.",
          "desc_rus": "Esse sed harum atque et veritatis odio sunt in sit.",
          "desc_byn": "Commodi tenetur aliquam eum rerum rem laborum dolor porro id."
        },
        "pullusAge": {
          "id": "55",
          "desc_eng": "Explicabo aut ipsam cum deleniti tenetur voluptatem.",
          "desc_rus": "Recusandae enim voluptatem fugit.",
          "desc_byn": "Iusto quia reiciendis."
        },
        "accuracyOfPullusAge": {
          "id": "-",
          "desc_eng": "Reprehenderit asperiores facilis aut.",
          "desc_rus": "Doloremque ipsa ratione quaerat.",
          "desc_byn": "Et repellendus et."
        },
        "placeCode": {
          "id": "MPNaN",
          "country": "Беларсь",
          "region": "Мозырь"
        },
        "accuracyOfCoordinates": {
          "id": 9,
          "desc_eng": "Quidem voluptatem debitis explicabo.",
          "desc_rus": "Voluptas nobis aut labore a hic.",
          "desc_byn": "Molestiae perferendis blanditiis nihil quia aut consequuntur."
        },
        "condition": {
          "id": 7,
          "desc_eng": "Запуталась в естественных условиях.",
          "desc_rus": "Запуталась в естественных условиях.",
          "desc_byn": "Запуталась в естественных условиях."
        },
        "circumstances": {
          "id": "42",
          "desc_eng": "Blanditiis tempore ad accusantium repudiandae cum nulla ea ut.",
          "desc_rus": "Tempora delectus veritatis esse ut illum tempora facere corporis.",
          "desc_byn": "At beatae doloribus."
        },
        "circumstancesPresumed": {
          "id": 0,
          "desc_eng": "Labore omnis quaerat earum.",
          "desc_rus": "Adipisci aut qui consequuntur et ut impedit.",
          "desc_byn": "Dolor impedit ab quia et."
        },
        "accuracyOfDate": {
          "id": 3,
          "desc_eng": "Qui ea quo ut consequatur maiores magnam.",
          "desc_rus": "Ut omnis dolorem ut qui quam suscipit.",
          "desc_byn": "Quia non dolorem."
        },
        "euringCodeIdentifier": {
          "id": 1,
          "desc_eng": "Harum ratione assumenda sint quia numquam ea voluptatem.",
          "desc_rus": "Quasi molestiae id ut vero accusantium nihil quibusdam sequi.",
          "desc_byn": "Facilis hic optio at asperiores nulla."
        },
        "ringerInformation": {
          "id": "4ccfc352-45ac-4f33-8f62-08b9a0db27c5",
          "email": "Shanel34@hotmail.com",
          "hash": "ac3a31fadb89cac4f6a17ed6777c093b7c3457049774b3dd6117b971dfd26ffe",
          "salt": "e8690e984ec1119c6f89818b05098ed1",
          "role": "ringer",
          "firstName": "Zelda",
          "lastName": "Bashirian"
        },
        "statusOfRing": {
          "id": "13707",
          "desc_eng": null,
          "desc_rus": null,
          "desc_byn": null
        }
      },
      "finder": {
        "id": "5927cbd0-5ddd-4282-9cde-c9c748a71318",
        "role": "observer",
        "firstName": null,
        "lastName": null
      },
      "speciesMentioned": {
        "id": "00030",
        "letterCode": "LABQSB",
        "species": "сибирская гага",
        "ordo": "nobis",
        "family": "magnam sit veniam",
        "desc_eng": null,
        "desc_rus": null,
        "desc_byn": null
      },
      "speciesConcluded": {
        "id": "00061",
        "letterCode": "CIMSBV",
        "species": "сибирская гага",
        "ordo": "quia",
        "family": "repellendus sunt facilis",
        "desc_eng": null,
        "desc_rus": null,
        "desc_byn": null
      },
      "sexMentioned": {
        "id": "F",
        "desc_eng": "Quia id omnis est ea aut aut magnam porro.",
        "desc_rus": "Женский",
        "desc_byn": "Dolores architecto ut consequatur illo adipisci."
      },
      "sexConcluded": {
        "id": "M",
        "desc_eng": "Molestias dolorem optio enim sed quia quo quasi.",
        "desc_rus": "Voluptas modi delectus ex quo et commodi.",
        "desc_byn": "Quae enim error."
      },
      "ageMentioned": {
        "id": "2",
        "desc_eng": "Aut architecto sed neque sunt cum quis perspiciatis numquam rerum.",
        "desc_rus": "2",
        "desc_byn": "Recusandae nemo quae nesciunt."
      },
      "ageConcluded": {
        "id": "2",
        "desc_eng": "Doloremque consequatur vel explicabo quis.",
        "desc_rus": "Dolorum quisquam similique.",
        "desc_byn": "Quia consequatur eius ut ipsam eum."
      },
      "manipulated": {
        "id": "M",
        "desc_eng": "Necessitatibus corrupti quaerat laborum est voluptas.",
        "desc_rus": "A eos in nisi velit quod.",
        "desc_byn": "Cum nemo quia quam ipsam."
      },
      "movedBeforeTheCapture": {
        "id": 2,
        "desc_eng": "Eos qui autem sed libero.",
        "desc_rus": "Sit numquam doloremque eius accusantium culpa quas nostrum.",
        "desc_byn": "Rem dicta nostrum nihil sit sed qui."
      },
      "catchingMethod": {
        "id": "U",
        "desc_eng": "Voluptate voluptates non explicabo.",
        "desc_rus": "Est tempora consequatur et harum nemo molestiae.",
        "desc_byn": "Vero fugit ut voluptatem."
      },
      "catchingLures": {
        "id": "D",
        "desc_eng": "Sit excepturi inventore.",
        "desc_rus": "Error blanditiis ut magnam rerum accusantium.",
        "desc_byn": "Officia et ut dolorem iste hic maiores molestiae."
      },
      "accuracyOfDate": {
        "id": 3,
        "desc_eng": "Qui ea quo ut consequatur maiores magnam.",
        "desc_rus": "Ut omnis dolorem ut qui quam suscipit.",
        "desc_byn": "Quia non dolorem."
      },
      "accuracyOfCoordinates": {
        "id": 2,
        "desc_eng": "Consequatur nulla et necessitatibus.",
        "desc_rus": "Cum deserunt nihil enim rerum iure et.",
        "desc_byn": "Dolores quis sunt voluptatem enim quas ad ut ea harum."
      },
      "status": {
        "id": "N",
        "desc_eng": "Debitis tempore accusantium labore vel dolores assumenda mollitia.",
        "desc_rus": "Запутанна в естественных условиях",
        "desc_byn": "Voluptate aliquid distinctio deleniti omnis consectetur aut praesentium sapiente in."
      },
      "pullusAge": {
        "id": "05",
        "desc_eng": "Voluptas et dolores culpa est et.",
        "desc_rus": "Incidunt tempora repudiandae voluptate assumenda.",
        "desc_byn": "Qui et dicta ducimus porro beatae."
      },
      "accuracyOfPullusAge": {
        "id": "0",
        "desc_eng": "Ab libero amet deserunt saepe maxime iure quasi magnam.",
        "desc_rus": "Aut omnis voluptatem est quia quis.",
        "desc_byn": "Nobis quos dolorum ea voluptas eligendi cum voluptatem culpa."
      },
      "condition": {
        "id": 0,
        "desc_eng": "Запуталась в естественных условиях.",
        "desc_rus": "Запуталась в естественных условиях.",
        "desc_byn": "Запуталась в естественных условиях."
      },
      "circumstances": {
        "id": "86",
        "desc_eng": "Exercitationem ut vero velit dolor.",
        "desc_rus": "Qui quia iusto expedita quia iusto deleniti ipsum.",
        "desc_byn": "Temporibus culpa facere quidem rerum id quia."
      },
      "circumstancesPresumed": {
        "id": 1,
        "desc_eng": "Incidunt iste earum porro deleniti.",
        "desc_rus": "Rem aperiam blanditiis deleniti totam aut consequatur aut labore sunt.",
        "desc_byn": "Recusandae tempora sit blanditiis numquam aliquid vitae minus occaecati sed."
      }
    }
      ],
      loading: false
    })
  };
  showObservation = (ObservationItem) => {
    this.props.navigation.navigate("ObservationItem", { ObservationItem });
  };

  static navigationOptions = () => ({
    title: translate("topLevelMenu.observationTitle")
  })

  render() {
    const { observations, loading } = this.state;
    return (!loading && 
      <View style={styles.wrapper}>
        <FlatList
          contentContainerStyle={styles.container}
          data={observations}
          renderItem={
            ({ item }) =>
              <Observation
                observationItem={item}
                showObservation={this.showObservation}
              />
          }
          keyExtractor={item => item.id}
        />
        <TouchableOpacity
          style={styles.addObservation}
          onPress={this.addObservation}>
          <Text style={styles.buttonTextStyle}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}