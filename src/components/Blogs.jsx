import BlogCard from "./BlogCard";
import blog1 from "../assets/blog1.png"

const Blogs = () => {
    return (
      <div name="blogs" className="w-full h-auto bg-[#0a192f] text-gray-300 sm:h-full">
        {/* Container */}
        <div className="max-w-[1100px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-[#cfac83] lg:text-6xl">
              Blogs
            </p>
            <p className="py-4 text-xl">
              {" "}
              These are the Blog's I've written
            </p>
          </div>
  
          <div className="">
            <BlogCard  link="https://shivangrawat.hashnode.dev/guide-to-saving-ethereum-smart-contract-data-in-mongodb" image={blog1} name="Guide to Saving Ethereum Smart Contract Data in MongoDB" desc="Imagine a giant scoreboard in the middle of Times Square, keeping track of everything — from your morning coffee purchase to who won the latest football game. Sounds like a lot of work, doesn't it? But this is exactly how blockchains work: they’re a secure, transparent ledger for everyone to see."/>
          </div>
        </div>
      </div>
    );
  };
  
  export default Blogs;