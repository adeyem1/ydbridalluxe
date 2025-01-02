<div className="container mx-auto md:px-6 px-6 text-center lg:text-left">
        <div className="lg:flex lg:items-center">
          <div className="lg:w-full h-full md:pb-20 lg:pb-20 pb-7 mt-20 md:px-20">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-white text-6xl font-bold lg:text-6xl"
            >
              <motion.span variants={textVariants}>Browse</motion.span>
              <motion.span variants={textVariants}>
                <span className="bg-[url('/src/assets/line.png')] bg-no-repeat bg-bottom">
                  {" "}
                  Local Markets{" "}
                </span>
              </motion.span>
              <motion.span variants={textVariants}>
                from the Comfort of Your Home
              </motion.span>
            </motion.div>

            <p
              ref={textRef}
              className="mt-6 text-white font-light lg:text-xl opacity-0 transform translate-y-12"
            >
              Step into a world of affordable thrifted (okrika) finds with My
              Thrift – your online gateway to the best local markets and
              vendors. Explore, shop, and discover the most affordable products,
              including maxi skirts, cargo pants, tees, and much more, all from
              the comfort of your home. Discover new vendors with awesome
              products at better prices.
            </p>

            <div
              className="md:mt-8 mt-12 md:gap-7 lg:gap-7 gap-5 flex justify-center lg:justify-start opacity-0 transform translate-y-12"
              ref={buttonRef}
            >
              <img
                src="https://res.cloudinary.com/dtaqusjav/image/upload/v1724414014/people_aenuc1.svg"
                alt="People icons"
                className="h-9 translate-y-2"
              />
              <button
                onClick={handleScrollToWaitlist}
                className="bg-white text-customOrange h-12 px-4 font-semibold md:py-2 md:h-12 md:px-8 rounded-full hover:bg-gray-100"
              >
                Join the Waitlist
              </button>
            </div>
          </div>

          <div
            className="md:w-full w-full md:mt-20   flex justify-center items-center md:h-full opacity-0 transform"
            ref={imageRef}
          >
            <img
              src={womanpic}
              alt="Happy shopper with bags"
              className="md:w-auto md:h-full w-3/4 h-auto rounded-lg"
            />
          </div>
        </div>
      </div>