import { FunctionComponent } from "react";
import Top1 from "../component/top1";
import StatsCard from "../component/stats-card";
import ButtonPrimaryWithIconLeft from "../component/button-primary-with-icon-left";
import ButtonPrimaryWithSmallIcon from "../component/button-primary-with-small-icon";
import Transaction from "../component/transaction";

const DashboardPreview: FunctionComponent = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales",
        data: [
          32000, 45000, 50000, 48000, 60000, 45591, 52000, 61000, 55000, 64000,
          70000, 75000,
        ],
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };
  return (
    <div className="w-full relative bg-base-black overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="flex-1 bg-color flex flex-col items-start justify-start pt-0 px-0 pb-[43px] box-border max-w-full mq450:pb-5 mq450:box-border mq975:pb-7 mq975:box-border">
        <div className="self-stretch h-[1091px] relative bg-color hidden" />
        <Top1 />
        <section className="w-[1554px] flex flex-row items-start justify-start py-0 pl-0 pr-5 box-border gap-[42px] max-w-full text-left text-smi text-gray-900 font-regular-13 mq725:gap-[21px] mq975:pl-5 mq975:box-border">
          <div className="w-[280px] flex flex-col items-start justify-start gap-5 mq975:hidden">
            <div className="self-stretch bg-gray-50 flex flex-col items-start justify-start pt-9 pb-0 pl-10 pr-6 gap-[30px] z-[1] mq450:gap-[15px]">
              <div className="w-[280px] h-[946px] relative bg-gray-50 hidden" />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-0">
                <button className="-ml-12 cursor-pointer [border:none] py-[9px] px-[430x] bg-indigo-600 flex-1 rounded-2xl flex flex-col items-center justify-center z-[2]">
                  <div className="self-stretch flex flex-row items-center justify-center py-0 px-0 gap-2.5">
                    <div className="flex flex-row items-center justify-center">
                      <img
                        className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/iconoutlineplus.svg"
                      />
                    </div>
                    <b className="relative text-smi leading-[20px] font-regular-13 text-color-3 text-right whitespace-nowrap">
                      Connect New Account
                    </b>
                  </div>
                </button>
              </div>
              <div className="flex flex-row items-start justify-start gap-[13px]">
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <img
                    className="w-[18px] h-[18px] relative overflow-hidden shrink-0 z-[2]"
                    loading="lazy"
                    alt=""
                    src="/iconoutlinehome.svg"
                  />
                </div>
                <div className="relative leading-[21px] font-medium z-[2]">
                  Dashboard
                </div>
              </div>
              <div className="w-[204px] flex flex-col items-start justify-start pt-0 px-0 pb-[287px] box-border gap-[23px] text-2xs text-gray-400 mq975:pb-[187px] mq975:box-border">
                <div className="flex flex-row items-start justify-start py-0 px-0.5">
                  <a className="[text-decoration:none] relative tracking-[1px] leading-[18px] uppercase font-medium text-[inherit] z-[2]">
                    Analytics
                  </a>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-5">
                  <div className="w-[113px] flex flex-col items-start justify-start gap-[30px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-5 text-smi text-gray-700">
                      <div className="flex flex-row items-start justify-start gap-[13px]">
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                          <img
                            className="w-[18px] h-[18px] relative overflow-hidden shrink-0 z-[2]"
                            loading="lazy"
                            alt=""
                            src="/iconoutlinechartbar.svg"
                          />
                        </div>
                        <div className="relative leading-[21px] font-medium z-[2]">
                          Performance
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[13px]">
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                          <img
                            className="w-[18px] h-[18px] relative overflow-hidden shrink-0 z-[2]"
                            loading="lazy"
                            alt=""
                            src="/iconoutlinecursorclick.svg"
                          />
                        </div>
                        <div className="relative leading-[21px] font-medium z-[2]">
                          Hotjar
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[23px]">
                      <div className="flex flex-row items-start justify-start py-0 px-0.5">
                        <a className="[text-decoration:none] relative tracking-[1px] leading-[18px] uppercase font-medium text-[inherit] z-[2]">
                          Support
                        </a>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[13px] text-smi text-gray-700">
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                          <div className="flex flex-col items-start justify-start gap-[23px]">
                            <img
                              className="w-[18px] h-[18px] relative overflow-hidden shrink-0 z-[2]"
                              loading="lazy"
                              alt=""
                              src="/iconoutlinechartbar-1.svg"
                            />
                            <img
                              className="w-[18px] h-[18px] relative overflow-hidden shrink-0 z-[2]"
                              loading="lazy"
                              alt=""
                              src="/iconoutlineuser.svg"
                            />
                            <img
                              className="w-[18px] h-[18px] relative overflow-hidden shrink-0 z-[2]"
                              loading="lazy"
                              alt=""
                              src="/iconoutlineusers.svg"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-5">
                          <div className="relative leading-[21px] font-medium z-[2]">
                            Tickets
                          </div>
                          <div className="relative leading-[21px] font-medium z-[2]">
                            Agents
                          </div>
                          <div className="relative leading-[21px] font-medium z-[2]">
                            Customers
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[23px]">
                      <div className="flex flex-row items-start justify-start py-0 px-0.5">
                        <a className="[text-decoration:none] relative tracking-[1px] leading-[18px] uppercase font-medium text-[inherit] z-[2]">
                          Shop
                        </a>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-5 text-smi text-gray-700">
                        <div className="flex flex-col items-start justify-start gap-5">
                          <div className="flex flex-row items-start justify-start gap-[13px]">
                            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                              <img
                                className="w-[18px] h-[18px] relative overflow-hidden shrink-0 z-[2]"
                                loading="lazy"
                                alt=""
                                src="/iconoutlinefolder.svg"
                              />
                            </div>
                            <div className="relative leading-[21px] font-medium z-[2]">
                              Products
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[13px]">
                            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                              <img
                                className="w-[18px] h-[18px] relative overflow-hidden shrink-0 z-[2]"
                                loading="lazy"
                                alt=""
                                src="/iconoutlinebell-1.svg"
                              />
                            </div>
                            <div className="relative leading-[21px] font-medium z-[2]">
                              Orders
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[13px]">
                          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                            <img
                              className="w-[18px] h-[18px] relative overflow-hidden shrink-0 z-[2]"
                              loading="lazy"
                              alt=""
                              src="/iconoutlinechartsquarebar.svg"
                            />
                          </div>
                          <div className="relative leading-[21px] font-medium z-[2]">
                            Reports
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[39px] flex flex-col items-start justify-start pt-11 px-0 pb-0 box-border text-center text-[10px] text-indigo-600">
                    <div className="self-stretch flex flex-col items-end justify-start gap-[74px]">
                      <div className="self-stretch rounded-[35.71px] bg-indigo-50 border-indigo-600 border-[1px] border-solid flex flex-row items-start justify-start py-0 pl-1.5 pr-[5px] z-[2]">
                        <div className="relative tracking-[1px] leading-[18px] uppercase font-medium">
                          NEW
                        </div>
                      </div>
                      <div className="rounded-[35.71px] bg-gray-500 flex flex-row items-start justify-start py-0 px-[5px] z-[2] text-2xs text-color-3">
                        <b className="relative leading-[18px]">15</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[13px] text-gray-700">
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <img
                    className="w-[18px] h-[18px] relative overflow-hidden shrink-0 z-[2]"
                    loading="lazy"
                    alt=""
                    src="/iconoutlinecog.svg"
                  />
                </div>
                <div className="relative leading-[21px] font-medium z-[2]">
                  Settings
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-10 text-gray-700">
              <div className="flex flex-row items-start justify-start gap-[13px]">
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <img
                    className="w-[18px] h-[18px] relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/iconoutlinelogout.svg"
                  />
                </div>
                <div className="relative leading-[21px] font-medium z-[1]">
                  Logout
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border max-w-[calc(100%_-_322px)] text-base mq975:max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[30.5px] max-w-full mq725:gap-[15px]">
              <div className="flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full">
                <div className="flex flex-row items-start justify-start gap-2 max-w-full mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <a className="[text-decoration:none] relative leading-[24px] font-bold text-[inherit] z-[1]">
                      Hey Mariana -
                    </a>
                  </div>
                  <div className="relative leading-[26px] text-gray-500 inline-block max-w-full z-[1]">
                    here’s what’s happening with your store today
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-center flex-wrap content-start gap-[25px] max-w-full z-[1]">
                  <StatsCard
                    todaysSale="Today’s Sale"
                    prop="$12,426"
                    prop1="+ 36%"
                    iconOutlinearrowUp="/iconoutlinearrowup.svg"
                    propColor="#22c55e"
                  />
                  <StatsCard
                    todaysSale="Total Sales"
                    prop="$2,38,485"
                    prop1="+ 14%"
                    iconOutlinearrowUp="/iconoutlinearrowdown.svg"
                    propColor="#ef4444"
                  />
                  <StatsCard
                    todaysSale="Total ORders"
                    prop="84,382"
                    prop1="+ 36%"
                    iconOutlinearrowUp="/iconoutlinearrowup-1.svg"
                    propColor="#22c55e"
                  />
                  <StatsCard
                    todaysSale="Total Customers"
                    prop="33,493"
                    prop1="+ 36%"
                    iconOutlinearrowUp="/iconoutlinearrowup-2.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-end justify-start gap-[29px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border gap-[31px] max-w-full mq725:gap-[15px] mq1000:flex-wrap">
                  <div className="flex-1 rounded-3xs bg-color-3 border-gray-200 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-4 px-[23px] pb-[19px] gap-[30px] min-w-[519px] max-w-full z-[1] mq725:min-w-full">
                    <div className="w-[798px] h-[329px] relative rounded-3xs bg-color-3 border-gray-200 border-[1px] border-solid box-border hidden max-w-full" />
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-2.5 box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq725:flex-wrap mq1000:flex-1">
                        <div className="flex flex-col items-start justify-start pt-0.5 pb-0 pl-0 pr-2">
                          <b className="relative leading-[24px] z-[1]">
                            Sales Report
                          </b>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[9px] max-w-full z-[1] mq450:flex-wrap">
                          <ButtonPrimaryWithIconLeft
                            iconOutlineplus="/iconoutlineplus-1.svg"
                            buttonName="12 Months"
                            // propBorder="1px solid #a1a1aa"
                            propTextDecoration="unset"
                            propFontWeight="bold"
                            propColor="#18181b"
                          />
                          <ButtonPrimaryWithIconLeft
                            iconOutlineplus="/iconoutlineplus-2.svg"
                            buttonName="6 Months"
                            propBorder="unset"
                            propTextDecoration="none"
                            propFontWeight="700"
                            propColor="#71717a"
                          />
                          <ButtonPrimaryWithIconLeft
                            iconOutlineplus="/iconoutlineplus-3.svg"
                            buttonName="30 Days"
                            propBorder="unset"
                            propTextDecoration="unset"
                            propFontWeight="bold"
                            propColor="#71717a"
                          />
                          <ButtonPrimaryWithIconLeft
                            iconOutlineplus="/iconoutlineplus-4.svg"
                            buttonName="7 Days"
                          />
                        </div>
                        <button className="cursor-pointer border-gray-300 border-[1px] border-solid py-1 px-1.5 bg-color-3 w-[98px] rounded-8xs box-border flex flex-row items-start justify-start gap-[7px] z-[1]">
                          <div className="h-[30px] w-[98px] relative rounded-8xs bg-color-3 border-gray-300 border-[1px] border-solid box-border hidden" />
                          <div className="flex flex-col items-start justify-start pt-[1.3px] px-0 pb-0">
                            <img
                              className="w-4 h-[14.5px] relative z-[1]"
                              alt=""
                              src="/icon.svg"
                            />
                          </div>
                          <a className="[text-decoration:none] relative text-2xs leading-[18px] font-bold font-regular-13 text-gray-900 text-left z-[1]">
                            Export PDF
                          </a>
                        </button>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full text-center text-xs text-gray-500">
                      <div className="self-stretch flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border relative gap-[39px] max-w-full mq975:gap-[19px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-3 max-w-full">
                          <div className="self-stretch flex flex-col items-start justify-start gap-1 max-w-full">
                            <div className="self-stretch h-px relative border-gray-100 border-t-[1px] border-solid box-border z-[1]" />
                            <div className="w-[548px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                              <div className="flex flex-col items-end justify-start pt-2 px-5 pb-[15px] relative">
                                <div className="w-full !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_44px_44px_-7px_rgba(0,_0,_0,_0.08)] [backdrop-filter:blur(3px)] bg-color-3 border-gray-200 border-[0px] border-solid box-border flex flex-row items-start justify-start z-[3]">
                                  <div className="h-[63px] flex-1 relative">
                                    <img
                                      className="absolute top-[52px] left-[39px] w-[18px] h-[11px]"
                                      loading="lazy"
                                      alt=""
                                      src="/polygon-1.svg"
                                    />
                                    <div className="absolute top-[0px] left-[0px] shadow-[0px_44px_44px_-7px_rgba(0,_0,_0,_0.08)] rounded-lg bg-color-3 border-gray-200 border-[1px] border-solid box-border w-24 h-[57px] z-[1]" />
                                  </div>
                                </div>
                                <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] z-[5]">
                                  June 2021
                                </a>
                                <div className="flex flex-row items-start justify-end py-0 pl-[3px] pr-0.5 mt-[-2px] text-smi text-gray-900">
                                  <b className="relative leading-[22px] whitespace-nowrap z-[4]">
                                    $45,591
                                  </b>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch h-px relative border-gray-100 border-t-[1px] border-solid box-border z-[1]" />
                        </div>
                        <div className="self-stretch h-px relative border-gray-100 border-t-[1px] border-solid box-border z-[1]" />
                        <div className="w-[calc(100%_+_1px)] h-px absolute !m-[0] top-[70px] right-[-1px] left-[0px] border-gray-100 border-t-[1px] border-solid box-border z-[1]" />
                        <img
                          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 z-[2]"
                          alt=""
                          src="/bg.svg"
                        />
                        <div className="w-px h-[73px] absolute !m-[0] bottom-[1px] left-[274px] border-gray-200 border-r-[1px] border-solid box-border z-[3]" />
                        <div className="w-3.5 h-3.5 absolute !m-[0] bottom-[70px] left-[269px] rounded-[50%] bg-indigo-600 border-color-3 border-[0px] border-solid box-border z-[4]" />
                        <div className="self-stretch h-px relative border-gray-100 border-t-[1px] border-solid box-border z-[1]" />
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-1.5 box-border max-w-full text-smi text-gray-600">
                        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq725:flex-wrap">
                          <div className="relative leading-[21px] font-medium text-left z-[1]">
                            Feb
                          </div>
                          <div className="relative leading-[21px] font-medium z-[1]">
                            Mar
                          </div>
                          <div className="relative leading-[21px] font-medium z-[1]">
                            Apr
                          </div>
                          <div className="relative leading-[21px] font-medium z-[1]">
                            May
                          </div>
                          <div className="relative leading-[21px] font-medium z-[1]">
                            Jun
                          </div>
                          <div className="relative leading-[21px] font-medium z-[1] mq725:w-full mq725:h-4">
                            Jul
                          </div>
                          <div className="relative leading-[21px] font-medium z-[1]">
                            Aug
                          </div>
                          <div className="relative leading-[21px] font-medium z-[1]">
                            Sep
                          </div>
                          <div className="relative leading-[21px] font-medium z-[1]">
                            Oct
                          </div>
                          <div className="relative leading-[21px] font-medium z-[1]">
                            Nov
                          </div>
                          <div className="relative leading-[21px] font-medium z-[1]">
                            Dec
                          </div>
                          <div className="relative leading-[21px] font-medium z-[1]">
                            Jan
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-96 rounded-3xs bg-color-3 border-gray-200 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[18px] pb-[35px] pl-[27px] pr-[21px] gap-6 min-w-[384px] max-w-full z-[1] text-smi mq450:min-w-full mq1000:flex-1">
                    <div className="w-96 h-[329px] relative rounded-3xs bg-color-3 border-gray-200 border-[1px] border-solid box-border hidden max-w-full" />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[7px] text-base">
                      <div className="self-stretch flex flex-row items-end justify-between gap-5 mq450:flex-wrap">
                        <div className="w-[117px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[39px]">
                            <b className="relative leading-[24px] z-[1]">
                              Traffic Sources
                            </b>
                            <div className="relative text-smi leading-[21px] font-medium z-[1]">
                              Direct
                            </div>
                          </div>
                        </div>
                        <div className="w-[84px] flex flex-col items-end justify-start gap-10 text-right text-xs">
                          <div className="flex flex-row items-start justify-start gap-1.5">
                            <div className="relative leading-[20px] font-medium z-[1]">
                              Last 7 Days
                            </div>
                            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                              <img
                                className="w-3.5 h-3.5 relative z-[1]"
                                alt=""
                                src="/icon-1.svg"
                              />
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-end py-0 pl-3 pr-0.5 text-smi">
                            <div className="flex-1 relative leading-[21px] font-medium z-[1]">
                              1,43,382
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[5px] relative">
                        <img
                          className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                          alt=""
                          src="/elements--line--gorizontal.svg"
                        />
                        <img
                          className="absolute top-[0px] left-[0px] w-[268px] h-[5px] z-[2]"
                          loading="lazy"
                          alt=""
                          src="/elements--line--gorizontal-1.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[7px]">
                      <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
                        <div className="relative leading-[21px] font-medium z-[1]">
                          Referral
                        </div>
                        <div className="w-[59px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-right">
                          <div className="self-stretch relative leading-[21px] font-medium z-[1]">
                            87,974
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[5px] relative">
                        <img
                          className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                          alt=""
                          src="/elements--line--gorizontal-2.svg"
                        />
                        <img
                          className="absolute top-[-0.1px] left-[0px] w-[215.4px] h-[5.2px] object-contain z-[2]"
                          loading="lazy"
                          alt=""
                          src="/elements--line--gorizontal-3@2x.png"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[7px]">
                      <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
                        <div className="relative leading-[21px] font-medium z-[1]">
                          Social Media
                        </div>
                        <div className="w-[76px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-right">
                          <div className="self-stretch relative leading-[21px] font-medium z-[1]">
                            45,211
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[5px] relative">
                        <img
                          className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                          alt=""
                          src="/elements--line--gorizontal-4.svg"
                        />
                        <img
                          className="absolute top-[0px] left-[0px] w-[110px] h-[5px] z-[2]"
                          loading="lazy"
                          alt=""
                          src="/elements--line--gorizontal-5.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[7px]">
                      <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
                        <div className="relative leading-[21px] font-medium z-[1]">
                          Twitter
                        </div>
                        <div className="w-[76px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-right">
                          <div className="self-stretch relative leading-[21px] font-medium z-[1]">
                            21,893
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[5px] relative">
                        <img
                          className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                          alt=""
                          src="/elements--line--gorizontal-6.svg"
                        />
                        <img
                          className="absolute top-[0px] left-[0px] w-[42px] h-[5px] z-[2]"
                          loading="lazy"
                          alt=""
                          src="/elements--line--gorizontal-7.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[31px] max-w-full mq725:gap-[15px] mq1000:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start max-w-full mq725:min-w-full">
                    <div className="self-stretch rounded-t-3xs rounded-b-none bg-color-3 border-gray-200 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-4 pb-[18px] pl-6 pr-[19px] gap-16 shrink-0 max-w-full z-[1] mq450:gap-4 mq725:flex-wrap mq975:gap-8">
                      <div className="h-[165px] w-[798px] relative rounded-t-3xs rounded-b-none bg-color-3 border-gray-200 border-[1px] border-solid box-border hidden max-w-full" />
                      <div className="flex-1 flex flex-col items-end justify-start min-w-[333px] max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-start">
                          <div className="w-[308px] flex flex-col items-start justify-start gap-[31px] mq450:gap-[15px]">
                            <div className="flex flex-col items-start justify-start gap-1">
                              <b className="relative leading-[24px] z-[2]">
                                Transactions
                              </b>
                              <div className="relative text-smi leading-[22px] text-gray-500 z-[2]">
                                Lorem ipsum dolor sit amet, consectetur adipis.
                              </div>
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-between gap-5 text-xs text-green-900">
                              <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                                <div className="rounded-21xl bg-green-100 flex flex-row items-start justify-start pt-0.5 px-[9px] pb-1 gap-2 z-[1]">
                                  <div className="h-[26px] w-[103px] relative rounded-21xl bg-green-100 hidden" />
                                  <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                                    <div className="w-2 h-2 relative rounded-[50%] bg-green-500 z-[1]" />
                                  </div>
                                  <div className="relative leading-[20px] font-medium z-[1]">
                                    Completed
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start gap-[3px] text-smi text-gray-900">
                                <b className="relative leading-[22px] whitespace-pre-wrap z-[1]">
                                  Visa card **** 4831
                                </b>
                                <div className="relative leading-[21px] font-medium text-gray-500 z-[1]">
                                  Card payment
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[3px] mt-[-46px] text-smi">
                          <b className="relative leading-[22px] whitespace-nowrap z-[1]">
                            $182.94
                          </b>
                          <div className="relative leading-[21px] font-medium text-gray-500 z-[1]">
                            Jan 17, 2022
                          </div>
                        </div>
                      </div>
                      <div className="w-[177px] flex flex-col items-end justify-start gap-[62px] text-smi text-gray-500">
                        <ButtonPrimaryWithSmallIcon />
                        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[5px]">
                          <div className="flex-1 flex flex-row items-start justify-between gap-5">
                            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                              <div className="relative leading-[21px] font-medium z-[1]">
                                Amazon
                              </div>
                            </div>
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
                              loading="lazy"
                              alt=""
                              src="/iconoutlinedotshorizontal.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Transaction
                      completed="Completed"
                      mastercard6442="Mastercard  **** 6442"
                      cardPayment="Card payment"
                      day="$99.00"
                      facebook="Facebook"
                      iconOutlinedotsHorizontal="/iconoutlinedotshorizontal-1.svg"
                    />
                    <Transaction
                      completed="Pending"
                      mastercard6442="Account  ****882"
                      cardPayment="Bank payment"
                      day="$249.94"
                      facebook="Netflix"
                      iconOutlinedotsHorizontal="/iconoutlinedotshorizontal-2.svg"
                      propBoxShadow="unset"
                      propBorderRadius="unset"
                      propBoxShadow1="unset"
                      propBorderRadius1="unset"
                      propWidth="unset"
                      propBackgroundColor="#fef9c3"
                      propAlignSelf="unset"
                      propWidth1="81px"
                      propBackgroundColor1="#fef9c3"
                      propBackgroundColor2="#facc15"
                      propColor="#713f12"
                      propWidth2="190px"
                      propPadding="unset"
                      propWidth3="84px"
                    />
                    <Transaction
                      completed="Canceled"
                      mastercard6442="Amex card  **** 5666"
                      cardPayment="Card payment"
                      day="$199.24"
                      facebook="Amazon Prime"
                      iconOutlinedotsHorizontal="/iconoutlinedotshorizontal-3.svg"
                      propBoxShadow="unset"
                      propBorderRadius="0px 0px 10px 10px"
                      propBoxShadow1="unset"
                      propBorderRadius1="0px 0px 10px 10px"
                      propWidth="126px"
                      propBackgroundColor="#fee2e2"
                      propAlignSelf="stretch"
                      propWidth1="92px"
                      propBackgroundColor1="#fee2e2"
                      propBackgroundColor2="#ef4444"
                      propColor="#7f1d1d"
                      propWidth2="195px"
                      propPadding="0px 5px 0px 0px"
                      propWidth3="unset"
                    />
                  </div>
                  <div className="w-[383px] rounded-3xs bg-color-3 border-gray-200 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-4 pb-[22px] pl-[26px] pr-[23px] gap-[29px] min-w-[383px] max-w-full z-[1] mq450:min-w-full mq1000:flex-1">
                    <div className="w-[383px] h-[420px] relative rounded-3xs bg-color-3 border-gray-200 border-[1px] border-solid box-border hidden max-w-full" />
                    <div className="flex flex-col items-start justify-start gap-1">
                      <b className="relative leading-[24px] z-[1]">
                        Recent Customers
                      </b>
                      <div className="relative text-smi leading-[22px] text-gray-500 z-[1]">
                        Lorem ipsum dolor sit ametis.
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[53px] text-smi mq450:gap-[26px] mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[27px] min-w-[141px]">
                        <div className="self-stretch flex flex-row items-end justify-start gap-[13px]">
                          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[4.4px]">
                            <div className="flex flex-col items-start justify-start gap-[33px]">
                              <img
                                className="w-9 h-9 relative object-cover z-[1]"
                                loading="lazy"
                                alt=""
                                src="/image@2x.png"
                              />
                              <img
                                className="w-9 h-9 relative object-cover z-[1]"
                                loading="lazy"
                                alt=""
                                src="/image-1@2x.png"
                              />
                              <img
                                className="w-9 h-9 relative object-cover z-[1]"
                                loading="lazy"
                                alt=""
                                src="/image-2@2x.png"
                              />
                              <img
                                className="w-9 h-9 relative object-cover z-[1]"
                                loading="lazy"
                                alt=""
                                src="/image-3@2x.png"
                              />
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start gap-[22px]">
                            <div className="flex flex-col items-start justify-start gap-[3px]">
                              <b className="relative leading-[22px] z-[1]">
                                Jenny Wilson
                              </b>
                              <div className="relative leading-[22px] text-gray-500 whitespace-nowrap z-[1]">
                                w.lawson@example.com
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[3px]">
                              <b className="relative leading-[22px] z-[1]">
                                Devon Lane
                              </b>
                              <div className="relative leading-[22px] text-gray-500 whitespace-nowrap z-[1]">
                                dat.roberts@example.com
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[3px]">
                              <b className="relative leading-[22px] z-[1]">
                                Jane Cooper
                              </b>
                              <div className="relative leading-[22px] text-gray-500 whitespace-nowrap z-[1]">
                                jgraham@example.com
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[3px]">
                              <b className="relative leading-[22px] z-[1]">
                                Dianne Russell
                              </b>
                              <div className="relative leading-[22px] text-gray-500 whitespace-nowrap z-[1]">
                                curtis.d@example.com
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 px-px text-right text-2xs text-gray">
                          <div className="flex flex-row items-start justify-start gap-3.5">
                            <b className="relative tracking-[1px] leading-[18px] uppercase z-[1]">
                              See All customers
                            </b>
                            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                              <img
                                className="w-3.5 h-3.5 relative overflow-hidden shrink-0 z-[1]"
                                loading="lazy"
                                alt=""
                                src="/iconoutlinecheveronright-1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-right">
                        <div className="flex flex-col items-end justify-start gap-[23px]">
                          <div className="flex flex-col items-end justify-start gap-[3px]">
                            <div className="relative leading-[21px] font-medium whitespace-nowrap z-[1]">
                              $11,234
                            </div>
                            <div className="relative leading-[22px] text-gray-500 z-[1]">
                              Austin
                            </div>
                          </div>
                          <div className="flex flex-col items-end justify-start gap-[3px]">
                            <div className="relative leading-[21px] font-medium whitespace-nowrap z-[1]">
                              $11,159
                            </div>
                            <div className="relative leading-[22px] text-gray-500 z-[1]">
                              New York
                            </div>
                          </div>
                          <div className="flex flex-col items-end justify-start gap-[3px]">
                            <div className="relative leading-[21px] font-medium whitespace-nowrap z-[1]">
                              $10,483
                            </div>
                            <div className="relative leading-[22px] text-gray-500 z-[1]">
                              Toledo
                            </div>
                          </div>
                          <div className="flex flex-col items-end justify-start gap-[3px]">
                            <div className="relative leading-[21px] font-medium whitespace-nowrap z-[1]">
                              $9,084
                            </div>
                            <div className="relative leading-[22px] text-gray-500 z-[1]">
                              Naperville
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPreview;
