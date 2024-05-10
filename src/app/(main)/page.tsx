"use client";

import { useRouter } from "next/navigation";

export default function Route() {
  return useRouter().push('item')
}
