import React, { useContext } from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLatterBox from "../components/NewsLatterBox";
import { ShopContext } from "../context/ShopContext";
function About() {
  const { showSearch, navigate } = useContext(ShopContext);
  if (showSearch) {
    navigate("/collections");
  }
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Us"} />
      </div>

      {/* <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            quis iste sunt architecto aut nulla molestiae ipsum maxime accusamus
            temporibus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            impedit perferendis sequi aperiam pariatur numquam velit ea, ducimus
            eaque fugiat, dolor repellat eligendi aliquid culpa cum vel
            provident, ut deserunt.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            debitis minus ex! Eligendi, facilis. Quam perferendis temporibus
            tempora quod? Magni.
          </p>
        </div>
      </div> */}
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At ForeEver, we’re passionate about delivering exceptional products
            and services that meet the highest standards of quality and style.
            Our mission is to provide you with a unique and satisfying
            experience, whether you're exploring our latest collections or
            seeking personalized solutions.
          </p>
          <p>
            Founded on the principles of innovation and dedication, we strive to
            exceed your expectations. Our team is committed to crafting and
            curating offerings that blend cutting-edge design with timeless
            appeal. We believe in creating lasting relationships with our
            customers, grounded in trust and excellence.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Discover more about our story, values, and what drives us. We invite
            you to join us on this exciting journey and experience the
            difference we bring to the table.
          </p>
        </div>
      </div>
      {/* <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            quis iste sunt architecto aut nulla molestiae ipsum maxime accusamus
            temporibus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            impedit perferendis sequi aperiam pariatur numquam velit ea, ducimus
            eaque fugiat, dolor repellat eligendi aliquid culpa cum vel
            provident, ut deserunt.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            debitis minus ex! Eligendi, facilis. Quam perferendis temporibus
            tempora quod? Magni.
          </p>
        </div>
      </div> */}
      <div className="text-xl py-4">
        <Title text1={"Why"} text2={"Choose Us"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border md:px-16 py-8 sm:py-15 sm:px-4 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-700">
            At FOREVER, we are dedicated to maintaining the highest standards of
            quality in everything we do. Our rigorous quality assurance process
            ensures that every product meets our exacting criteria for
            excellence. From careful selection of materials to meticulous
            craftsmanship, we leave no stone unturned to guarantee that our
            offerings not only meet but exceed your expectations. We believe
            that quality is not just a promise but a fundamental part of our
            commitment to you. Our team works tirelessly to address any concerns
            and ensure that you receive nothing but the best. Trust in our
            dedication to delivering superior products that stand the test of
            time and provide lasting satisfaction.
          </p>
        </div>
        <div className="border md:px-16 py-8 sm:py-15 sm:px-4 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-700">
            At ForeEver, we prioritize your convenience every step of the way.
            Our streamlined processes and user-friendly solutions are designed
            to make your experience as effortless and enjoyable as possible.
            Whether it’s easy online ordering, flexible delivery options, or
            responsive customer support, we’re here to ensure that everything
            runs smoothly and efficiently. We understand that your time is
            valuable, so we’ve tailored our services to fit seamlessly into your
            busy life. Enjoy the ease of navigating our platform, accessing
            prompt assistance, and receiving your products with minimal hassle.
            Your satisfaction is our top priority, and we’re committed to making
            every interaction with us a simple and pleasant experience.
          </p>
        </div>
        <div className="border md:px-16 py-8 sm:py-15 sm:px-4 flex flex-col gap-5">
          <b>Exceptional Customer service:</b>
          <p className="text-gray-700">
            At ForeEver, we pride ourselves on delivering exceptional customer
            service that goes above and beyond your expectations. Our dedicated
            team is here to assist you with prompt and personalized support,
            ensuring that your needs are met with care and attention to detail.
            From answering your queries to resolving any issues, we strive to
            provide a seamless and positive experience at every touchpoint. We
            believe that outstanding service is not just about solving problems
            but about creating memorable interactions that reflect our
            commitment to your satisfaction. Trust us to be your reliable
            partner, always ready to help and make your experience with us truly
            exceptional.
          </p>
        </div>
      </div>
      {/* <NewsLatterBox/> */}
    </div>
  );
}

export default About;
