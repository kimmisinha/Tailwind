import React from "react";

function Tailwind() {
  return (
    <div className="bg-black">
      <h3 className=" text-red-700 grid place-content-center h-screen">
        Tailwind
      </h3>
      <div className="">
        <div
          className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center 
             space-x-4"
        >
          <div>
            <img
              className="h-12 w-12"
              src="https://akm-img-a-in.tosshub.com/aajtak/images/story/201605/pwd_146293901026_650x425_051116092730.jpg"
              alt="broken-image"
            />
          </div>
          <div>
            <div className="text-xl font-medium text-black">
              Tailwind css
              <p className="text-slate-400 text-base"> by kimmi</p>
            </div>
          </div>
          <button className="bg-sky-600 text-center mx-5 mt-3 text-white text-base p-2 rounded-lg hover:bg-blue-600 hover:text-yellow-200 dark:bg-red-700 ml-5">
            Buy Now
          </button>
        </div>
      </div>
      <div className="text-center my-4">
        <p className="text-white  md:text-green-700 sm:text-red-600">
          The host computer interface is contained on a plug-in module designed
          for the IBM PC/XT/AT bus. It includes the converters, counters,
          registers and programmed-logic components which control the receiver
          and produce timing signals. It normally produces an interrupt upon
          completion of each A/D conversion, which occurs three times in each
          GRI (one each for the I and Q integrators, plus a third for the
          signal-level indicator), which results in between 30 and 75 interrupts
          per second, depending on the LORAN-C chain rate or GRI. At interrupt
          time the program can modify the timing generator registers, read the
          A/D converter buffer (ADCBUF), set the A/D converter multiplexor
          address (ADCMUX), pulse-code buffer (PCBUF) and parameter register
          (PAR) for the next GRI. Since the integrators used in the receiver
          itself accumulate only over the 8-ms PCI, it is the responsibility of
          the program to accumulate these three channels of data for subsequent
          GRIs. At any time the program can output previously computed values to
          the D/A converter A (DACA) and D/A converter B (DACB) to set the
          precision oscillator frequency and receiver gain control voltages,
          respectively.
        </p>
      </div>
    </div>
  );
}

export default Tailwind;
