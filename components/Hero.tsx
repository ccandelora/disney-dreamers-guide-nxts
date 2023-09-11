import Image from 'next/image'

export default function Hero(props) {
    const photo = props.photo;
    const alt = props.alt;
    const title = props.title;

    return (
              <div className="bg-white py-4 sm:py-6">
                <div className="mx-auto max-w-1xl sm:px-6 lg:px-8">
                  <div className=" relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-3 pt-80 sm:pt-24 lg:pt-40">
                    <Image 
                      className="absolute inset-0 -z-100  h-full w-full object-cover"
                      src={photo}
                      alt={alt}
                      width={1920}
                      height={1080}
 
                    />
                    <div className="absolute inset-0 -z-100 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                    <div className="absolute inset-0 -z-100 rounded-2xl ring-1 ring-inset ring-gray-900/10" />     
                    
                    <div className="relative mx-auto max-w-2xl lg:mx-0">
                      <figure>
                        <blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8">
                          <h1 className="text-2xl">
                            {title}
                          </h1>
                          <p className="mt-2">Check to see if your favorite attraction is going to be a walk on!</p>
                        </blockquote>
                        <figcaption className="mt-6 text-base text-white">
                          <div className="font-semibold"><a href="https://queue-times.com/en-US">Powered by Queue-Times.com</a></div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  </div>
                </div>

            )
          }
          