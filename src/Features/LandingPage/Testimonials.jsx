import test1 from '../../Assets/testimonial1.jpg';
import girl1 from '../../Assets/girl1.jpg';
import girl2 from '../../Assets/girl2.jpg';
import men1 from '../../Assets/men1.jpg';
import men2 from '../../Assets/men2.jpg';

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="min-h-screen max-w-full bg-slate-200  px-12 pb-20 pt-16"
    >
      <div className="relative mx-auto mb-14 mt-6 flex h-36  items-center  bg-slate-900 bg-cover bg-center pb-3">
        <div className="absolute ml-3 h-[90%] w-[98%]  border-2 border-dashed border-green-500"></div>
        <h1 className=" w-full text-center text-6xl  font-extrabold  uppercase tracking-widest text-white">
          You're in good company
        </h1>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-4 grid-rows-3">
        <div className="col-span-3  px-4 py-8">
          <div className="rounded-lg bg-blue-600 px-6 py-4 text-slate-100 shadow-lg">
            <p className="mb-3 text-sm font-medium leading-7 tracking-wide">
              "As a sales professional, my day revolves around making
              connections and closing deals. This software's Sales Tracking
              feature has become my trusty sidekick. Listing sales items with
              their selling prices and quantities has never been easier. And
              when plans change, the ability to modify details instantly keeps
              me adaptable in a fast-paced market. It's as if this software was
              designed to cater to the needs of salespeople like me. If you want
              to up your sales game, I highly recommend giving it a try."
            </p>
            <div className="mb-4 flex items-center gap-3 px-4">
              <div className="flex items-center justify-center">
                <img
                  className="h-12 w-12 rounded-full object-center"
                  src={test1}
                  alt="test1"
                />
              </div>
              <div>
                <p className="text-sm font-bold">John D</p>
                <p className="text-sm text-slate-300">Sales Professional</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-2  ">
          <div className="rounded-lg bg-yellow-400 px-6 py-4 shadow-lg">
            <p className="mb-3 text-sm font-medium leading-7 tracking-wide">
              "In the world of retail, customer relationships are paramount.
              That's where the Customer Management feature of this software
              shines. I can effortlessly list my customers with contact numbers
              and addresses, making it easier than ever to connect and stay
              engaged. And when customer details change, the modification
              capability ensures that my records are always accurate. This
              software has elevated my customer interactions to a whole new
              level, and I'm thrilled with the impact it's had on my business."
            </p>
            <div className="mb-4 flex items-center gap-3 px-4">
              <div className="flex items-center justify-center">
                <img
                  className="h-12 w-12 rounded-full object-center"
                  src={men1}
                  alt="men1"
                />
              </div>
              <div>
                <p className="text-sm font-bold">David R</p>
                <p className="text-sm text-slate-600">Retailer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-2 ">
          <div className="rounded-lg bg-green-500 px-6 py-4 shadow-lg">
            <p className="mb-3 text-sm font-medium leading-7 tracking-wide text-slate-800">
              "Procurement management can be quite the challenge, but this
              software's Purchase Management feature has changed the game for
              us. The ease of inputting purchase quantities, buying prices, and
              manufacturer details has simplified our process immensely. What's
              even better is the flexibility to modify these details as needed.
              It has transformed the way we approach procurement, making it more
              strategic and efficient. If you're in procurement, you'll
              appreciate the value this software brings to the table."
            </p>
            <div className="mb-4 flex items-center gap-3 px-4">
              <div className="flex items-center justify-center">
                <img
                  className="h-12 w-12 rounded-full object-center"
                  src={girl1}
                  alt="girl1"
                />
              </div>
              <div>
                <p className="text-sm font-bold">Emily T</p>
                <p className="text-sm text-slate-700">Procurement Manager</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 p-2">
          <div className="rounded-lg bg-slate-300 px-6 py-4 shadow-lg">
            <p className="mb-3 text-sm font-medium leading-7 tracking-wide">
              "This software has boosted my business's efficiency. From managing
              sales to procurement and customer relationships, it's a
              comprehensive solution. It's like having a personal assistant for
              my operations.And let's not forget Customer Management it has
              taken my customer relationships to the next level. If you're an
              entrepreneur aiming for operational excellence, don't miss out on
              this software."
            </p>
            <div className="mb-4 flex items-center gap-3 px-4">
              <div className="flex items-center justify-center">
                <img
                  className="h-12 w-12 rounded-full object-center"
                  src={men2}
                  alt="men2"
                />
              </div>
              <div>
                <p className="text-sm font-bold">Michael W</p>
                <p className="text-sm text-slate-600"> Entrepreneur</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3  px-2 py-6">
          <div className="rounded-lg bg-red-500 px-6 py-4 shadow-lg">
            <p className="mb-3 text-sm  font-medium leading-7 tracking-wide">
              "Efficiently managing inventory is at the core of smooth
              operations, and this software has become my secret weapon. The
              Items Management feature, with its user-friendly input, real-time
              updates, and modification options, has revolutionized how we
              handle inventory. It's a massive time-saver and accuracy enhancer.
              The integrated approach of this software has transformed our
              workflow, minimizing data duplication and maximizing efficiency.
              If you want to keep your warehouse running like a well-oiled
              machine, this software is a must-try."
            </p>
            <div className="mb-4 flex items-center gap-3 px-4">
              <div className="flex items-center justify-center">
                <img
                  className="h-12 w-12 rounded-full object-center"
                  src={girl2}
                  alt="girl2"
                />
              </div>
              <div>
                <p className="text-sm font-bold">Sophia K</p>
                <p className="text-sm text-slate-600">Warehouse Supervisor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
