"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
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

  return (
    <div className="min-h-screen bg-white">
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
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900"
            >
              บริการนำเข้าสินค้าครบวงจร
              <span className="block text-primary mt-2">ติดตามสถานะพัสดุแบบเรียลไทม์</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0"
            >
              รู้สถานะพัสดุได้ตลอดเส้นทางในมือถือของคุณ ดูประวัติและขั้นตอนการจัดส่งอย่างชัดเจน
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mt-6"
            >
              <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors flex items-center">
                เริ่มใช้บริการ
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-colors">
                ดูตัวอย่างการติดตาม
              </button>
            </motion.div>
          </div>

          {/* Right Column: Mobile Mockup */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
            <div className="relative w-64 h-[480px] bg-gray-100 rounded-3xl shadow-xl overflow-hidden">
              {/* Simulated mobile device frame */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-300 rounded-full"></div>
              {/* Mobile screen content */}
              <div className="absolute inset-0 p-4 flex flex-col bg-white">
                {/* Header area */}
                <div className="mb-4 flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-500">เช็คสถานะพัสดุ</span>
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </div>
                {/* Tracking number */}
                <div className="mb-6">
                  <p className="text-xs text-gray-400">หมายเลขพัสดุ</p>
                  <p className="text-lg font-bold text-primary">TH12345678901</p>
                </div>
                {/* Status badge */}
                <div className="mb-6">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    กำลังขนส่ง
                  </span>
                </div>
                {/* Timeline steps */}
                <div className="flex flex-col space-y-4 flex-grow">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                      ✓
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-700">12 มิ.ย. 10:30 - ออกจากคลังต้นทาง</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                      ✓
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-700">14 มิ.ย. 08:45 - ถึงด่านศุลกากร</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                      …
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-700">15 มิ.ย. 14:20 - กำลังดำเนินพิธีการศุลกากร</p>
                    </div>
                  </div>
                  <div className="flex items-start opacity-50">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-white text-xs">
                      …
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-400">รอดำเนินการ - ถึงคลังปลายทาง</p>
                    </div>
                  </div>
                </div>
                {/* Footer */}
                <div className="pt-4 border-t border-gray-200">
                  <button className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    ดูรายละเอียดเพิ่มเติม
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">บริการของเรา</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">ครอบคลุมทุกขั้นตอนการนำเข้าสินค้า ด้วยประสบการณ์กว่า 10 ปี</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "สั่งซื้อสินค้าจากต่างประเทศ",
                image: "/placeholder.svg?height=200&width=400",
                points: [
                  "ช่วยสั่งซื้อสินค้าจากจีน เกาหลี ญี่ปุ่น",
                  "ตรวจสอบความน่าเชื่อถือของผู้ขาย",
                  "เจรจาต่อรองราคาให้ดีที่สุด",
                ],
              },
              {
                title: "ขนส่งและโลจิสติกส์",
                image: "/placeholder.svg?height=200&width=400",
                points: [
                  "บริการขนส่งทางเรือ อากาศ และรถบรรทุก",
                  "ระบบติดตามสถานะแบบเรียลไทม์",
                  "ประกันสินค้าระหว่างการขนส่ง",
                ],
              },
              {
                title: "จัดการเอกสารศุลกากร",
                image: "/placeholder.svg?height=200&width=400",
                points: [
                  "ดำเนินการเอกสารนำเข้าอย่างถูกต้อง",
                  "ผ่านพิธีการศุลกากรอย่างรวดเร็ว",
                  "จัดการภาษีนำเข้าอย่างถูกต้อง",
                ],
              },
              {
                title: "ตรวจสอบคุณภาพสินค้า",
                image: "/placeholder.svg?height=200&width=400",
                points: [
                  "ตรวจสอบสินค้าก่อนส่งออกจากต้นทาง",
                  "ถ่ายภาพและวิดีโอสินค้าให้ลูกค้า",
                  "รับประกันคุณภาพตามมาตรฐาน",
                ],
              },
              {
                title: "ประกันสินค้า",
                image: "/placeholder.svg?height=200&width=400",
                points: [
                  "ประกันความเสียหายระหว่างการขนส่ง",
                  "คุ้มครองเต็มมูลค่าสินค้า",
                  "ชดเชยรวดเร็วหากเกิดความเสียหาย",
                ],
              },
              {
                title: "ติดตามสถานะแบบเรียลไทม์",
                image: "/placeholder.svg?height=200&width=400",
                points: [
                  "ระบบติดตามสินค้าออนไลน์ 24/7",
                  "การแจ้งเตือนทุกขั้นตอนผ่าน SMS และอีเมล",
                  "รายงานสถานะประจำวันสำหรับลูกค้า VIP",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl shadow-lg group bg-white"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <ul className="text-gray-700 space-y-2">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
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
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">เพียง 5 ขั้นตอนง่ายๆ สินค้าจากต่างประเทศจะมาถึงมือคุณ</p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "ส่งรายละเอียดสินค้า",
                description: "ส่งลิงก์สินค้าหรือรูปภาพที่ต้องการนำเข้า พร้อมจำนวนที่ต้องการ",
              },
              {
                step: "02",
                title: "รับใบเสนอราคา",
                description: "ทีมงานจะคำนวณราคาสินค้า ค่าขนส่ง และค่าดำเนินการให้ภายใน 24 ชั่วโมง",
              },
              {
                step: "03",
                title: "ชำระเงินมัดจำ",
                description: "ชำระเงินมัดจำ 50% เพื่อเริ่มดำเนินการสั่งซื้อสินค้า",
              },
              {
                step: "04",
                title: "ติดตามสถานะ",
                description: "ติดตามสถานะการสั่งซื้อ การขนส่ง และการผ่านศุลกากรผ่านระบบออนไลน์",
              },
              {
                step: "05",
                title: "รับสินค้า",
                description: "ชำระเงินส่วนที่เหลือและรับสินค้าที่จุดรับที่ตกลงกัน หรือส่งถึงที่",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="timeline-step"
              >
                <div className="timeline-number">{item.step}</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
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
            <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-400 transition-colors">
              เริ่มใช้บริการ
            </button>
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
            className="tracking-highlight p-8 md:p-12"
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
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white rounded-xl shadow-xl p-6 max-w-md">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-bold text-primary">ระบบติดตามพัสดุ</h3>
                      <span className="text-green-500 text-sm font-semibold">สถานะ: กำลังขนส่ง</span>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm text-gray-500">12 มิ.ย. 2024, 10:30</p>
                          <p className="font-medium text-primary">สินค้าถูกส่งออกจากคลังต้นทาง</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm text-gray-500">14 มิ.ย. 2024, 08:45</p>
                          <p className="font-medium text-primary">สินค้าถึงด่านศุลกากร</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm text-gray-500">15 มิ.ย. 2024, 14:20</p>
                          <p className="font-medium text-primary">กำลังดำเนินพิธีการศุลกากร</p>
                        </div>
                      </div>
                      <div className="flex items-center opacity-40">
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm text-gray-500">รอดำเนินการ</p>
                          <p className="font-medium text-primary">สินค้าถึงคลังปลายทาง</p>
                        </div>
                      </div>
                      <div className="flex items-center opacity-40">
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm text-gray-500">รอดำเนินการ</p>
                          <p className="font-medium text-primary">จัดส่งถึงผู้รับ</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">หมายเลขพัสดุ</p>
                          <p className="font-bold text-primary">TH12345678901</p>
                        </div>
                        <button className="text-primary font-semibold hover:text-blue-700 transition-colors flex items-center">
                          ดูรายละเอียด <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-full flex items-center justify-center text-primary font-bold">
                    <div className="text-center">
                      <div className="text-sm">ติดตาม</div>
                      <div className="text-xl">24/7</div>
                    </div>
                  </div>
                </motion.div>
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
                  description: "ไปิดตู้ภายใน 1-2 วัน เพื่อให้ลูกค้าได้รับสินค้าเร็วที่สุด สั่งได้เรื่อยๆ",
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
              <div className="aspect-w-16 aspect-h-9 bg-gray-800">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="วิดีโอสอนสั่งสินค้าจากจีน"
                  width={600}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-primary rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </button>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-white text-xl font-bold">เรียนรู้เคล็ดลับการสั่งสินค้าจากจีนให้ได้ราคาดีที่สุด</h3>
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

              <div className="flex justify-center">
                <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-400 transition-colors flex items-center">
                  <Calendar className="mr-2 w-5 h-5" /> จองที่นั่งเลย
                </button>
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
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Users className="w-12 h-12" />,
                title: "ทีมผู้เชี่ยวชาญ",
                points: [
                  "ทีมงานมืออาชีพ มีประสบการณ์มากกว่า 10 ปี",
                  "พนักงานผ่านการอบรมด้านการนำเข้าส่งออก",
                  "มีความเชี่ยวชาญเฉพาะด้านในแต่ละประเทศ",
                ],
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "ความปลอดภัย",
                points: [
                  "ประกันสินค้าเต็มมูลค่า ไม่มีค่าใช้จ่ายเพิ่มเติม",
                  "ระบบรักษาความปลอดภัยข้อมูลลูกค้า",
                  "การตรวจสอบคุณภาพสินค้าก่อนจัดส่ง",
                ],
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "รวดเร็วทันใจ",
                points: ["ระยะเวลาการนำเข้าเฉลี่ย 15-30 วัน", "ตอบกลับภายใน 24 ชั่วโมง", "มีบริการเร่งด่วนสำหรับสินค้าเร่งด่วน"],
              },
              {
                icon: <CheckCircle className="w-12 h-12" />,
                title: "โปร่งใสทุกขั้นตอน",
                points: [
                  "ติดตามสถานะได้แบบเรียลไทม์ 24/7",
                  "แจ้งค่าใช้จ่ายทั้งหมดล่วงหน้า ไม่มีค่าแอบแฝง",
                  "รายงานความคืบหน้าอย่างสม่ำเสมอ",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="reason-card"
              >
                <div className="flex items-center mb-4">
                  <div className="text-primary mr-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                </div>
                <ul className="reason-list">
                  {item.points.map((point, i) => (
                    <li key={i} className="reason-list-item">
                      {point}
                    </li>
                  ))}
                </ul>
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

            {/* CTA Button */}
            <div className="text-center mt-12">
              <button className="bg-primary text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-blue-400 transition-colors">
                เริ่มใช้บริการ
              </button>
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
              <h4 className="text-lg font-bold mb-4">บริการ</h4>
              <ul className="space-y-2 text-blue-100">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    นำเข้าจากจีน
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    นำเข้าจากเกาหลี
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    นำเข้าจากญี่ปุ่น
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    ขนส่งทางเรือ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    ขนส่งทางอากาศ
                  </Link>
                </li>
              </ul>
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
                <p>📍 123/45 ถนนสุขุมวิท แขวงคลองตัน</p>
                <p>เขตวัฒนา กรุงเทพฯ 10110</p>
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
