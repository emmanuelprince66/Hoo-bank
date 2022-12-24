import React from 'react'
import { card } from '../assets'
import styles , { layout } from '../style'
import ButtonG from './ButtonG'

const CardDeal = () => 
    (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal
           <br className='sm:block hidden' />
            in few easy steps.</h2>
            <p className={styles.paragraph}>Arctor tortor , purus in mattis at sed integer faucibus .Aliquet ultrices
              ac ametau. </p>

      <ButtonG styles="mt-10" />

      </div>


      <div className={layout.sectionImg}>
        <img src={card} alt="card" />
      </div>

    </section>
  )


export default CardDeal