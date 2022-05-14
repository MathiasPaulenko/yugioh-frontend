import { useCollectionCards } from "../../hooks/userCollectionCards";
import { CardOnList } from "../common/CardOnList";
import { Title } from "../common/Title";
import { BASE_URL } from '../../helpers/constants.js';

export const CollectionsScreen = () => {

  const { loading, data } = useCollectionCards(`${BASE_URL}collection/card/?limit=100`);
  const card_data = !!data && data.data;

  return (
    <>
      <Title value='List of Cards'></Title>

      {
        loading
          ?
          (
            <div className="alert alert-info text-center">
              Loading...
            </div>
          )
          :
          (
            <div className="row mt-5">

              {
                card_data.map((card, index) => {
                  return < CardOnList
                    key={index}
                    name={card.seril_code}
                    image={card.img_code}
                    card_name={card.name}
                    serial_code={card.serial_code}
                  >
                    
                  </CardOnList>
                })
              }

            </div>
          )
      }

    </>
  )
}
