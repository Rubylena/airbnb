import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 bg-white z-10 w-full text-xs md:px-24 py-2">
      <div className="hidden md:flex lg:flex-row flex-col gap-2 justify-between items-center">
        <div className="flex items-center gap-2">
          <span>© 2023 Airbnb, Inc.</span>
          <span>·</span>
          <span>
            <ol className="flex gap-3 ">
              <li className="flex gap-1">
                <a href="/terms" className="_1jndx64e l1ovpqvx dir dir-ltr">
                  Terms
                </a>
                <span>
                  <span aria-hidden="true">
                    <span aria-hidden="true">·</span>
                  </span>
                </span>
              </li>
              <li className="flex gap-1">
                <span>
                  <span aria-hidden="true">
                    <span aria-hidden="true">·</span>
                  </span>
                </span>
                <a
                  href="/sitemaps/v2"
                  className="_1jndx64e l1ovpqvx dir dir-ltr"
                >
                  Sitemap
                </a>
                <span>
                  <span aria-hidden="true">
                    <span aria-hidden="true">·</span>
                  </span>
                </span>
              </li>
              <li className="flex gap-1">
                <span>
                  <span aria-hidden="true">
                    <span aria-hidden="true">·</span>
                  </span>
                </span>
                <a href="/terms/privacy_policy">Privacy</a>
                <span>
                  <span aria-hidden="true">
                    <span aria-hidden="true">·</span>
                  </span>
                </span>
              </li>
              <li className="flex gap-1">
                <span>
                  <span aria-hidden="true">
                    <span aria-hidden="true">·</span>
                  </span>
                </span>
                <a target="_blank" href="/help/sale-share-opt-out">
                  <div className="flex items-center gap-2">
                    Your Privacy Choices
                    <div>
                      <svg width="26" height="12" fill="none">
                        <rect
                          x="0.5"
                          y="0.5"
                          width="25"
                          height="11"
                          rx="5.5"
                          fill="#fff"
                        ></rect>
                        <path
                          d="M14 1h7a5 5 0 010 10H11l3-10z"
                          fill="#06F"
                        ></path>
                        <path
                          d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5"
                          stroke="#06F"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5"
                          stroke="#fff"
                          strokeLinecap="round"
                        ></path>
                        <rect
                          x="0.5"
                          y="0.5"
                          width="25"
                          height="11"
                          rx="5.5"
                          stroke="#06F"
                        ></rect>
                      </svg>
                    </div>
                  </div>
                </a>
              </li>
            </ol>
          </span>
          <span aria-hidden="true">·</span>
          <button type="button">Destinations</button>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-3">
            <span>
              <button type="button" className="flex items-center gap-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      height: "16px",
                      width: "16px",
                      fill: "currentcolor",
                    }}
                  >
                    <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path>
                  </svg>
                </span>
                <span>English (US)</span>
              </button>
            </span>
            <span>
              <button type="button" className="flex items-center gap-1">
                <span>$</span>
                <span>USD</span>
              </button>
            </span>
          </div>
          <button type="button">
            <span className="flex items-center gap-1 font-semibold">
              <span>Support &amp; resources</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    height: "16px",
                    width: "16px",
                    fill: "none",
                    stroke: "currentcolor",
                    strokeWidth: 4,
                    overflow: "visible",
                  }}
                >
                  <path
                    fill="none"
                    d="M4 20 15.3 8.7a1 1 0 0 1 1.4 0L28 20"
                  ></path>
                </svg>
              </span>
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
