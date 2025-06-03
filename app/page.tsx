"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Phone,
  Mail,
  MessageCircle,
  CheckCircle,
  Star,
  ChevronDown,
  Users,
  Globe,
  Shield,
  Clock,
  Truck,
  FileText,
  Package,
  Search,
  ArrowRight,
  ChevronRight,
  PlayCircle,
  Calendar,
  ShoppingBag,
  Briefcase,
  UserCheck,
  ArrowUpRight,
} from "lucide-react"

const heroImages = [
  {
    title: "นำเข้าสินค้าจากต่างประเทศ",
    subtitle: "ง่าย รวดเร็ว เชื่อถือได้",
  },
  {
    title: "บริการครบวงจร",
    subtitle: "ตั้งแต่สั่งซื้อจนถึงส่งมอบ",
  },
  {
    title: "ทีมงานมืออาชีพ",
    subtitle: "ประสบการณ์มากกว่า 10 ปี",
  },
]

export default function ImportBusinessLanding() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto slide for hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      title: "ขนส่งจากจีน-ไทย ทางรถ",
      image: "/images/1_1.webp?height=200&width=400",
      points: [
        "ชิปปิ้งจากจีน ระยะเวลา 5-7 วัน",
        "พร้อมบริการส่งตรงถึงมือคุณ",
        "พร้อมบริการส่งตรงถึงมือคุณ",
      ],
    },
    {
      title: "ขนส่งจากจีน-ไทย ทางเรือ",
      image: "/images/1_2.webp",
      points: [
        "ชิ้ปปิ้งจากจีน ระยะเวลา 20-25 วัน",
        "ประหยัดค่าใช้จ่าย",
        "ของชิ้นเล็กก็สามารถส่งได้",
      ],
    },
    {
      title: "บริการเหมาตู้สินค้า",
      image: "/images/1_3.webp",
      points: [
        "ราคาสุดคุ้ม",
        "เหมาะกับผู้ประกอบการ",
        "รับหน้าโรงงานได้เลย",
      ],
    },
    {
      title: "ออกแบบกำกับภาษีสินค้า",
      image: "/images/1_4.webp",
      points: [
        "ออกใบกำกับภาษีค่าสินค้า",
        "ใช้งานได้จริง",
        "คุ้มค่า",
      ],
    },
    {
      title: "นำเข้าแบบมีเอกสารถูกต้อง",
      image: "/images/2_5.webp",
      points: [
        "เอกสารถูกต้อง",
        "ออกใบขนจากศุลกากร",
        "FORM E ใช้ลดหย่อนภาษี",
      ],
    },
    {
      title: "บริการทัวร์แหล่งสินค้า/ล่ามแปลภาษา",
      image: "/images/2_6.webp",
      points: [
        "บุกถึงแหล่งสินค้าจีน",
        "ทั้งทัวร์และล่าม",
        "จัดให้ทุกอย่างตามงบประมาณ",
      ],
    },
    {
      title: "แลกเงินหยวน ฝากจ่ายสินค้า",
      image: "/images/2_7.webp",
      points: [
        "เติมเงิน Alipay",
        "เติมเงิน บัญชีจีน",
        "ฝากจ่าย TAOBAO 1688",
      ],
    },
    {
      title: "ฝากสั่งสินค้าจากจีน",
      image: "/images/2_8.webp",
      points: [
        "จัดหาสินค้า",
        "ฝากสั่งสินค้า TAOBAO  1688 Alibaba",
        "ดูแลสินค้าทุกขั้นตอน",
      ],
    },
  ];

  const [showAllServices, setShowAllServices] = useState(false);
  const displayedServices = showAllServices ? services : services.slice(0, 4);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/plearn_logo.webp"
              alt="Plearn Cargo"
              width={40}
              height={40}
              className="h-16 w-16"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-primary transition-colors">
              บริการของเรา
            </Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors">
              วิธีการใช้บริการ
            </Link>
            <Link href="/rates" className="text-gray-700 hover:text-primary transition-colors">
              อัตราค่าบริการ
            </Link>
            <Link href="#concept" className="text-gray-700 hover:text-primary transition-colors">
              แนวคิด
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-primary transition-colors">
              ติดต่อ
            </Link>
          </nav>
          <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-400 transition-colors">
            สอบถามผ่าน LINE
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 lg:px-8 py-16 flex flex-col lg:flex-row items-center">
          {/* Left Column: Text & CTA */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
            >
              รับนำเข้าสินค้า
              จากจีน - ไทย
              <span className="block text-4xl text-primary mt-2">ติดตามสถานะพัสดุได้ 24 ชม.</span>
            </motion.h1>

            {/* <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0"
            >
              รู้สถานะพัสดุได้ตลอดเส้นทางในมือถือของคุณ ดูประวัติและขั้นตอนการจัดส่งอย่างชัดเจน
            </motion.p> */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start lg:items-start gap-4 mt-6"
            >
              <Link href="#services">
                <button className="group text-black px-1 text-lg font-semibold bg-transparent relative overflow-hidden flex items-center">
                  <span className="relative z-10 text-2xl">บริการของเรา</span>
                  <ArrowRight className="ml-2 w-5 h-5 text-black relative z-10 transform transition-transform duration-300 group-hover:translate-x-1" />
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Divider สำหรับหน้าจอใหญ่ */}
          <div className="hidden lg:block w-px h-64 bg-gray-200 mx-8"></div>

          {/* Right Column: Infographic Process */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <div className="flex flex-col items-center space-y-8">
              {/* Step 1: Ship from China */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
              >
                <Package className="w-12 h-12 text-primary" />
                <p className="mt-2 text-gray-800 font-medium">ส่งออกจากจีน</p>
              </motion.div>

              {/* Arrow */}
              <ChevronDown className="w-6 h-6 text-gray-400 rotate-360" />

              {/* Step 2: Customs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
              >
                <Shield className="w-12 h-12 text-secondary" />
                <p className="mt-2 text-gray-800 font-medium">ผ่านพิธีการศุลกากร</p>
              </motion.div>

              {/* Arrow */}
              <ChevronDown className="w-6 h-6 text-gray-400 rotate-360" />

              {/* Step 3: Truck to Thailand */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
              >
                <Truck className="w-12 h-12 text-primary" />
                <p className="mt-2 text-gray-800 font-medium">ขนส่งถึงไทย</p>
              </motion.div>

              {/* Arrow */}
              <ChevronDown className="w-6 h-6 text-gray-400 rotate-360" />

              {/* Step 4: Last Mile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
              >
                <Users className="w-12 h-12 text-secondary" />
                <p className="mt-2 text-gray-800 font-medium">จัดส่งถึงบ้านคุณ</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="inline-block bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
              บริการของเรา
            </span>
            <h2 className="text-3xl md:text-4xl font-bold my-2">
              ครอบคลุมทุกขั้นตอนการนำเข้าสินค้า
            </h2>
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
            >
              <span>{showAllServices ? "View Less Services" : "View All Services"}</span>
              <ArrowUpRight className="ml-2 w-5 h-5 text-primary transform transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedServices.map((service, index) => (
              <div key={index} className="relative bg-transparent">
                {/* Card Container */}
                <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  {/* Image */}
                  <div className="relative md:h-40 xl:h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>
                  {/* Overlay Box */}
                  <div className="-mt-6 bg-gray-200 bg-opacity-90 p-4 rounded-b-2xl">
                    <h3 className="text-foreground text-lg font-semibold mt-6">
                      {service.title}
                    </h3>
                    <ul className="text-foreground-300 text-sm space-y-2 mt-2">
                      {service.points.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">วิธีการใช้บริการ</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">เพียง 6 ขั้นตอนง่ายๆ สินค้าจากจีนจะมาถึงมือคุณ</p>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: "1",
                title: "ติดต่อ",
                description: <>ลูกค้าติดต่อ <span className="text-secondary font-bold">เพลิน คาร์โก้</span> เพื่อลงทะเบียน</>,
              },
              {
                step: "2",
                title: "ส่งเอกสาร",
                description: <>ส่งเอกสารที่ใช้ในการเปิดรหัสให้กับ <span className="text-secondary font-bold">เพลิน คาร์โก้</span></>,
              },
              {
                step: "3",
                title: "เลือกโกดัง",
                description: <><span className="text-secondary font-bold">เพลิน คาร์โก้</span> จะแนะนำที่อยู่โกดังที่จีนให้ลูกค้า</>,
              },
              {
                step: "4",
                title: "สั่งสินค้าเข้าโกดัง",
                description: <>ลูกค้าแจ้งโรงงาน/ร้านค้า ให้ส่งสินค้าเข้าโกดังของ <span className="text-secondary font-bold">เพลิน คาร์โก้</span> ที่จีน</>,
              },
              {
                step: "5",
                title: "ติดตามสถานะ",
                description: <><span className="text-secondary font-bold">เพลิน คาร์โก้</span> แจ้งลูกค้าเมื่อสินค้าเข้าโกดังจีนและเมื่อถึงโกดังไทย</>,
              },
              {
                step: "6",
                title: "รับสินค้า",
                description: <><span className="text-secondary font-bold">เพลิน คาร์โก้</span> แจ้งยอดค่าขนส่ง นัดรับสินค้า และประสานงานจัดส่ง</>,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                {/* Icon per step */}
                <div className="flex-shrink-0 mr-4">
                  {item.step === "1" && <Phone className="w-8 h-8" />}
                  {item.step === "2" && <Mail className="w-8 h-8" />}
                  {item.step === "3" && <Package className="w-8 h-8" />}
                  {item.step === "4" && <Truck className="w-8 h-8" />}
                  {item.step === "5" && <CheckCircle className="w-8 h-8" />}
                  {item.step === "6" && <Users className="w-8 h-8" />}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{`${item.step}. ${item.title}`}</h3>
                  <p className="text-gray-600 text-lg">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
          </motion.div>
        </div>
      </section>

      {/* Tracking System Highlight */}
      <section id="tracking" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="tracking-highlight p-4 md:p-6 overflow-visible"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">ติดตามพัสดุ 24 ชั่วโมง</h2>
                <p className="text-xl mb-6">ระบบติดตามพัสดุแบบเรียลไทม์ ตรวจสอบสถานะได้ตลอด 24 ชั่วโมง ไม่พลาดทุกความเคลื่อนไหว</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-white mr-3 flex-shrink-0" />
                    <span>ติดตามสถานะแบบเรียลไทม์ผ่านเว็บไซต์และแอพพลิเคชั่น</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-white mr-3 flex-shrink-0" />
                    <span>รับการแจ้งเตือนทุกขั้นตอนผ่าน SMS และอีเมล</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-white mr-3 flex-shrink-0" />
                    <span>ดูประวัติการเดินทางของสินค้าย้อนหลังได้ตลอด</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="กรอกหมายเลขพัสดุ"
                      className="w-full px-4 py-3 pr-12 rounded-lg border-2 border-white bg-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <Search className="absolute right-4 top-3 w-5 h-5 text-white" />
                  </div>
                  <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                    ตรวจสอบ
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                {/* Mobile Mockup */}
                <div className="w-80 mx-auto rounded-[2.5rem] border-8 border-gray-800 bg-gray-800 shadow-2xl relative hover:scale-105 transition-transform duration-300">
                  <div className="bg-white rounded-[2rem] p-4 h-[550px] overflow-y-auto">
                    {/* Screen Header */}
                    <div className="text-center text-sm text-gray-500 mb-2">PlearnCargo.com</div>

                    {/* App Header */}
                    <div className="text-lg font-semibold text-gray-700 mb-4 text-center border-b pb-2">ติดตามพัสดุ</div>

                    {/* Parcel Number */}
                    <div className="bg-gray-100 p-3 rounded-lg shadow-sm mb-4">
                      <label className="text-xs text-gray-500 block mb-1">หมายเลขพัสดุ:</label>
                      <p className="text-sm text-gray-800 font-medium">TH123456789XYZ</p>
                    </div>

                    {/* Current Status Card */}
                    <div className="bg-primary/10 p-4 rounded-lg shadow-md mb-6">
                      <div className="flex items-center mb-2">
                        <Truck className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                        <h3 className="text-md font-semibold text-primary">กำลังขนส่ง</h3>
                      </div>
                      <p className="text-xs text-gray-600">อัปเดตล่าสุด: 15 มิ.ย. 2024, 14:30</p>
                    </div>

                    {/* Shipment Timeline */}
                    <div className="space-y-4">
                      {/* Step 1: Completed */}
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">รับพัสดุแล้ว</p>
                          <p className="text-xs text-gray-500">14 มิ.ย. 2024, 10:00</p>
                        </div>
                      </div>
                      {/* Step 2: Current */}
                      <div className="flex items-center">
                        <Truck className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-primary">อยู่ระหว่างขนส่ง</p>
                          <p className="text-xs text-gray-500">14 มิ.ย. 2024, 18:30</p>
                        </div>
                      </div>
                      {/* Step 3: Pending */}
                      <div className="flex items-center opacity-60">
                        <Clock className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-gray-500">ถึงศูนย์คัดแยกปลายทาง</p>
                          <p className="text-xs text-gray-400">รอดำเนินการ</p>
                        </div>
                      </div>
                      {/* Step 4: Pending */}
                      <div className="flex items-center opacity-60">
                        <Clock className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-gray-500">กำลังนำจ่าย</p>
                          <p className="text-xs text-gray-400">รอดำเนินการ</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Notch (Optional) */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-gray-800 rounded-b-xl"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="py-20 bg-white text-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            {/* Small bubble label above heading */}
            <span className="inline-block bg-yellow-300 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              แนวคิดของเรา
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">บริการขนส่งที่ตอบโจทย์</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              เรามุ่งสร้างประสบการณ์จัดส่งที่ง่าย รวดเร็ว และโปร่งใสสำหรับคุณ
            </p>
          </motion.div>

          {/* Split 2-box layout: Image on left, details on right */}
          <div className="mt-12 flex flex-col lg:flex-row items-start gap-8">
            {/* Left Box: Concept Image */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/storage_1.webp"
                  alt="บริการขนส่งสินค้า"
                  width={1000}
                  height={600}
                  className="rounded-xl shadow-2xl w-full object-cover"
                />
              </motion.div>
            </div>

            {/* Right Box: Concept Details */}
            <div className="w-full lg:w-1/2 space-y-6">
              {[
                {
                  title: "ชิ้นเดียวก็ส่งได้ 💰",
                  description: "ส่งง่ายสบายใจในเรทเดียว ไม่มีขั้นต่ำ ลงทุนน้อย ทุนไม่จม",
                },
                {
                  title: "ปิดตู้ไว ส่งถึงเร็ว 🚀",
                  description: "ปิดตู้ภายใน 1-2 วัน เพื่อให้ลูกค้าได้รับสินค้าเร็วที่สุด",
                },
                {
                  title: "เรทพิเศษสำหรับลูกค้า VIP 🎉",
                  description: "ลูกค้าขนส่งสินค้า 4 คิวขึ้นไป มีเรทพิเศษ ราคาดีแบบสุดๆ",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-colors"
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">สอนสั่งสินค้าจากจีน ฟรี!!</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">ทั้งทางออนไลน์และออนไซต์ เรียนรู้จากผู้เชี่ยวชาญตัวจริง</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden shadow-xl"
            >
              <div className="w-full max-w-2xl mx-auto">
                <div className="relative" style={{ paddingBottom: "56.25%", height: 0 }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/AWv3FuwXkEE?si=QqIP2DFroc-FDjID"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
                <h3 className="text-2xl font-bold text-primary mb-4">สำรองที่นั่งได้แล้ววันนี้</h3>
                <p className="text-lg text-gray-600 mb-4">LINE ID: @plearn.cargo</p>

                <h4 className="text-xl font-semibold text-primary mb-3">เหมาะสำหรับ</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-2 mr-3 flex-shrink-0">
                      <ShoppingBag className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">ผู้เริ่มต้นอยากสั่งสินค้าจากจีน</p>
                      <p className="text-gray-600">สั่งเองไม่ต้องผ่าน Shipping</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-2 mr-3 flex-shrink-0">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">ผู้ที่มีความต้องการขายสินค้าออนไลน์</p>
                      <p className="text-gray-600">เพิ่มกำไรด้วยการนำเข้าสินค้าโดยตรง</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-2 mr-3 flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">เจ้าของกิจการที่อยากลดต้นทุนสินค้า</p>
                      <p className="text-gray-600">เพิ่มความสามารถในการแข่งขันด้วยต้นทุนที่ต่ำลง</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-2 mr-3 flex-shrink-0">
                      <UserCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">เจ้าหน้าที่จัดซื้อ</p>
                      <p className="text-gray-600">ที่ต้องการหาสินค้าในราคาที่ถูกกว่า</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">เอกสารที่ใช้ในการสมัคร</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">เตรียมเอกสารให้พร้อมเพื่อความรวดเร็วในการดำเนินการ</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20, rotateZ: -2 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="document-card"
            >
              <h3 className="text-xl font-bold text-primary mt-8 mb-4">สำหรับบุคคลธรรมดา</h3>
              <ul className="document-list">
                <li className="document-list-item">สำเนาบัตรประชาชน หรือ หนังสือเดินทาง</li>
                <li className="document-list-item">สำเนาทะเบียนบ้าน</li>
                <li className="document-list-item">เบอร์โทรศัพท์ที่สามารถติดต่อได้</li>
                <li className="document-list-item">อีเมลที่ใช้งานเป็นประจำ</li>
                <li className="document-list-item">แบบฟอร์มลงทะเบียนที่กรอกข้อมูลครบถ้วน</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, rotateZ: 2 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="document-card"
            >
              <h3 className="text-xl font-bold text-primary mt-8 mb-4">สำหรับนิติบุคคล</h3>
              <ul className="document-list">
                <li className="document-list-item">สำเนาหนังสือรับรองบริษัท (ไม่เกิน 3 เดือน)</li>
                <li className="document-list-item">สำเนาบัตรประชาชนของกรรมการผู้มีอำนาจ</li>
                <li className="document-list-item">สำเนาทะเบียนภาษีมูลค่าเพิ่ม (ภ.พ.20)</li>
                <li className="document-list-item">หนังสือมอบอำนาจ (กรณีมอบอำนาจให้ผู้อื่นดำเนินการแทน)</li>
                <li className="document-list-item">ตราประทับบริษัท (ถ้ามี)</li>
                <li className="document-list-item">แบบฟอร์มลงทะเบียนที่กรอกข้อมูลครบถ้วน</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto mt-12"
          >
            <h3 className="text-xl font-bold text-primary mb-4">หมายเหตุ:</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                <span>เอกสารทุกฉบับต้องลงนามรับรองสำเนาถูกต้อง</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                <span>สามารถส่งเอกสารผ่านทางอีเมลหรือ LINE Official ได้</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                <span>กรณีนำเข้าสินค้าที่ต้องมีใบอนุญาตพิเศษ อาจต้องใช้เอกสารเพิ่มเติม</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">เหตุผลที่ต้องเลือกเรา</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">ความเชี่ยวชาญและประสบการณ์ที่สั่งสมมากกว่า 10 ปี</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { emoji: "🛍️", title: "ไม่ต้องแยกประเภทสินค้า" },
              { emoji: "💵", title: "รู้เรทราคาสินค้าที่แน่นอน" },
              { emoji: "📞", title: "ปรึกษาฟรี โดยเจ้าหน้าที่ผู้เชี่ยวชาญโดยตรง" },
              { emoji: "🤝", title: "ประสานงานกับร้านค้า/โรงงานจีนให้ฟรี" },
              { emoji: "🚚", title: "จัดส่งไวและตรงเวลา" },
              { emoji: "💳", title: "บริการเก็บเงินปลายทาง" },
              { emoji: "❤️", title: "เอาใจใส่ทุกรายละเอียด" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 p-6 shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{item.emoji}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">ลูกค้าพูดถึงเรา</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">ความไว้วางใจจากลูกค้ากว่า 1,000+ ราย</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "คุณสมชาย ใจดี",
                company: "ร้านขายของเล่น",
                image: "/placeholder.svg?height=80&width=80",
                rating: 5,
                text: "ใช้บริการมา 3 ปีแล้ว สินค้าถึงตรงเวลาทุกครั้ง ราคาดี บริการเยี่ยม แนะนำเลยครับ",
              },
              {
                name: "คุณมาลี รักสวย",
                company: "ร้านเสื้อผ้าออนไลน์",
                image: "/placeholder.svg?height=80&width=80",
                rating: 5,
                text: "ทีมงานใส่ใจมาก ช่วยเช็คคุณภาพสินค้าให้ด้วย ทำให้ลูกค้าของเราพอใจในสินค้าที่ได้รับ",
              },
              {
                name: "คุณวิชัย ประสบการณ์",
                company: "ร้านอะไหล่รถยนต์",
                image: "/placeholder.svg?height=80&width=80",
                rating: 5,
                text: "ระบบติดตามสถานะดีมาก รู้ว่าสินค้าอยู่ไหนตลอดเวลา ไม่ต้องกังวลเรื่องสินค้าหาย",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-400 transition-colors">
              สอบถามผ่าน LINE
            </button>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">คำถามที่พบบ่อย</h2>
            <p className="text-xl text-gray-600">คำตอบสำหรับคำถามที่ลูกค้าสงสัยกันมากที่สุด</p>
          </motion.div>
          <div className="space-y-4">
            {[
              {
                question: "ใช้เวลานำเข้าสินค้านานแค่ไหน?",
                answer:
                  "โดยเฉลี่ยใช้เวลา 15-30 วัน ขึ้นอยู่กับประเภทสินค้า ประเทศต้นทาง และวิธีการขนส่งที่เลือก ทางเรือจะใช้เวลานานกว่าทางอากาศ แต่ค่าใช้จ่ายถูกกว่า",
              },
              {
                question: "มีค่าใช้จ่ายแอบแฝงหรือไม่?",
                answer:
                  "ไม่มีค่าใช้จ่ายแอบแฝง เราจะแจ้งค่าใช้จ่ายทั้งหมดให้ทราบล่วงหน้า รวมถึงค่าสินค้า ค่าขนส่ง ค่าศุลกากร และค่าบริการของเรา",
              },
              {
                question: "สินค้าเสียหายระหว่างขนส่งจะทำอย่างไร?",
                answer:
                  "เรามีประกันสินค้าครอบคลุมความเสียหายระหว่างการขนส่ง หากสินค้าเสียหาย เราจะดำเนินการเคลมประกันให้ หรือจัดส่งสินค้าใหม่ให้",
              },
              {
                question: "สามารถนำเข้าสินค้าประเภทไหนได้บ้าง?",
                answer:
                  "สามารถนำเข้าสินค้าได้หลากหลายประเภท ยกเว้นสินค้าผิดกฎหมายหรือสินค้าต้องห้าม เช่น อาวุธ ยาเสพติด หรือสินค้าที่ละเมิดลิขสิทธิ์",
              },
              {
                question: "มีบริการตรวจสอบคุณภาพสินค้าหรือไม่?",
                answer: "มีครับ เรามีบริการตรวจสอบคุณภาพสินค้าก่อนส่งออกจากประเทศต้นทาง รวมถึงการถ่ายภาพส่งให้ลูกค้าดูก่อนจัดส่ง",
              },
            ].map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 border border-gray-200 rounded-lg group"
              >
                <summary className="p-6 cursor-pointer hover:bg-gray-100 flex justify-between items-center">
                  <span className="font-semibold text-primary">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-300" />
                </summary>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 text-gray-700"
                >
                  {faq.answer}
                </motion.div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact - Minimal & Flat Design */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">ติดต่อเรา</h2>
            <p className="text-xl text-gray-600">พร้อมให้คำปรึกษาและบริการ 24/7</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-8"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {/* LINE Contact */}
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">LINE Official</h3>
                  <p className="text-gray-600 mb-4">@Plearn Cargo</p>
                  <button className="bg-[#00C300] text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                    แชทเลย
                  </button>
                </div>
              </div>

              {/* Phone Contact */}
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">โทรศัพท์</h3>
                  <p className="text-gray-600">02-123-4567</p>
                  <p className="text-gray-600">089-123-4567</p>
                </div>
              </div>

              {/* Email Contact */}
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">อีเมล</h3>
                  <p className="text-gray-600">info@Plearn Cargo.co.th</p>
                  <p className="text-gray-600">support@Plearn Cargo.co.th</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xl font-bold">Plearn Cargo</span>
              </div>
              <p className="text-blue-100 mb-4">ผู้เชี่ยวชาญด้านการนำเข้าสินค้าจากต่างประเทศ ให้บริการมากว่า 10 ปี</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-xs">L</span>
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-xs">@</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">ข้อมูลบริษัท</h4>
              <ul className="space-y-2 text-blue-100">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    เกี่ยวกับเรา
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    ทีมงาน
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    ข่าวสาร
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    ร่วมงานกับเรา
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    นโยบายความเป็นส่วนตัว
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">ติดต่อเรา</h4>
              <div className="space-y-2 text-blue-100">
                <p>📍 9/111 หมู่8 คลองหนึ่ง คลองหลวง ปทุมธานี 12120</p>
                <p>📞 02-123-4567</p>
                <p>📱 089-123-4567</p>
                <p>✉️ info@Plearn Cargo.co.th</p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-400 mt-8 pt-8 text-center text-blue-100">
            <p>&copy; 2024 Plearn Cargo. สงวนลิขสิทธิ์ทุกประการ</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[#00C300] text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
