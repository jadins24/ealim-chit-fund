import React from 'react'
import './about.scss';

const About = () => {
  return (
    <div className='about'>
      <div className='about-container'>
        <div className='about-head' data-aos="fade-down-right">
          <h1>About US</h1>
        </div>
        <div className='about-content'>
          <div className='content1 ' data-aos="fade-right" data-aos-duration="1000">
            <p>As one of the leading Chit Fund Companies in Tenkasi, Ealimnesagiftson Chit Fund Private Limited is entering its second decade of service to its clients. The company is in its second decade of operation. The Chit Fund Company, founded on 28 July 2022, has grown in size and quality, through dedicated work, and selfless service. Mr. giftson is the Managing Director of Ealimnesagiftson Chit Fund Private Limited.</p>
            <p>A chit, as defined by the Chit Fund Act of 1982, refers to a financial transaction commonly known as a chit fund. It involves an agreement between a person and a specific number of individuals. In this agreement, each participant agrees to contribute regular installments of money or a designated amount of grain over a fixed period. Each subscriber becomes eligible to receive the prize amount in their respective turn. This is done through a selection process determined by lot, auction, tender, or any other method specified in the chit agreement. This legislation provides the legal framework and guidelines for chit-fund operations.</p>
          
          </div>
          
          <div className='content2' data-aos="fade-left" data-aos-duration="1000">
          <img src={require('../assets/img/about1.jpg')} alt='no image'/>

          </div>
          <div className='content3'>
            <p>From the very beginning, he was driven by his own dedication, hard work, and perseverance. We are proud to say that Ealimnesagiftson Chit Fund is the best chit fund company in India when it comes to prompt response and customer satisfaction. Through his Chit Fund business, he has helped all his customers achieve growth in business and wealth. From the beginning, he has grown by his own hard work, dedication, and perseverance. Among fund companies in India, Ealimnesagiftson Chit Fund has earned the distinction of being the best in terms of customer satisfaction and prompt response. Through his Chit Fund business, he has helped all his customers grow in business and wealth.</p>
            
            <p>Today, Ealimnesagiftson Chit Fund Private Limited is a well-known name in the chit fund industry. Ealimnesagiftson Chit Fund Private Limited stands out among other Chit Fund Companies because of its financial stability, personal service, integrity, and dedication to customer service. Our deep commitment to offering timely service and members contribute a long way in making us a successful Chit Fund Company. Customers who are happy with our service reflect this in their smiles.</p>
          </div>

          <div className='content4'>
           <p>Ealimnesagiftson Chit Fund Private Limited has gained the support and confidence of its customers because of the quality and service it provides.</p>

            <p>Chit Fund Company Tenkasi prides itself on being a reliable and trustworthy company. We will continue to provide service to all our subscribers in the same manner. Trust is a word that has become the main motto for Ealimnesagiftson Chit Fund Private Limited.</p>
          </div>
        
        </div>
        


      </div>


    </div>
  )
}

export default About