"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Truck, Ship, Star, MessageCircle } from "lucide-react"

export default function RatesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 text-primary hover:text-blue-700 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">กลับหน้าหลัก</span>
          </Link>
          <h1 className="text-xl font-bold text-primary">อัตราค่าบริการ</h1>
          <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-400 transition-colors">
            สอบถามผ่าน LINE
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">บริการขนส่งจากจีนมาไทย</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">ทางรถและทางเรือ</p>
            <div className="bg-white text-primary px-6 py-3 rounded-lg inline-block font-bold text-lg">
              คิดเป็นคิว (CBM) เท่านั้น*
            </div>
          </motion.div>
        </div>
      </section>

      {/* Special Rate Notice */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ลูกค้าส่งสินค้า 4 คิวขึ้นไป สอบถามทางไลน์ มี เรทพิเศษ!!!
            </h2>
            <div className="flex items-center justify-center space-x-4">
              <MessageCircle className="w-8 h-8 text-white" />
              <span className="text-xl font-semibold text-white">LINE: @plearn.cargo</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-primary px-6 py-3 rounded-full mb-6">
              <Star className="w-6 h-6 text-white" />
              <span className="text-xl font-bold text-white">เรทพิเศษมาก !!!</span>
              <Star className="w-6 h-6 text-white" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
              {/* Table Header */}
              <div className="bg-primary text-white">
                <div className="grid grid-cols-3 gap-4 p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold">ปริมาตรของสินค้า</h3>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <Truck className="w-6 h-6" />
                      <h3 className="text-xl font-bold">ทางรถ</h3>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <Ship className="w-6 h-6" />
                      <h3 className="text-xl font-bold">ทางเรือ</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {[
                  {
                    volume: "มากกว่า 4 คิว",
                    truck: "6,500 บาท",
                    ship: "4,000 บาท",
                    highlight: true,
                  },
                  {
                    volume: "1 - 3 คิว",
                    truck: "7,000 บาท",
                    ship: "5,500 บาท",
                    highlight: false,
                  },
                  {
                    volume: "น้อยกว่า 1 คิว",
                    truck: "8,000 บาท",
                    ship: "6,000 บาท",
                    highlight: false,
                  },
                ].map((row, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`grid grid-cols-3 gap-4 p-6 ${row.highlight ? "bg-primary/10 border-l-4 border-primary" : "hover:bg-gray-50"
                      } transition-colors`}
                  >
                    <div className="text-center">
                      <span className={`text-lg font-semibold ${row.highlight ? "text-primary" : "text-gray-700"}`}>
                        {row.volume}
                      </span>
                      {row.highlight && <div className="text-sm text-primary font-medium mt-1">⭐ เรทพิเศษ</div>}
                    </div>
                    <div className="text-center">
                      <span className={`text-xl font-bold ${row.highlight ? "text-primary" : "text-gray-800"}`}>
                        {row.truck}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className={`text-xl font-bold ${row.highlight ? "text-primary" : "text-gray-800"}`}>
                        {row.ship}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold text-primary mb-3">หมายเหตุ:</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• ราคาข้างต้นเป็นราคาพิเศษสำหรับลูกค้าประจำ</li>
                <li>• ราคาอาจเปลี่ยนแปลงตามสถานการณ์ตลาด</li>
                <li>• ไม่รวมค่าภาษีศุลกากรและค่าดำเนินการอื่นๆ</li>
                <li>• สำหรับข้อมูลเพิ่มเติม กรุณาติดต่อทีมงาน</li>
              </ul>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="space-y-4">
              <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-400 transition-colors">
                สอบถามเรทพิเศษ
              </button>
              <p className="text-gray-600">หรือติดต่อผ่าน LINE: @plearn.cargo</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
