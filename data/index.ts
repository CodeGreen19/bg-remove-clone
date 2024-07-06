import { PricingPlan } from "@/types/type";

export const UserQuestions = [
  {
    question: "What is this app?",
    answer:
      "This app allows you to remove the background from your images automatically. You can download the edited images for free in low resolution or in high resolution with our subscription plan.",
  },
  {
    question: "How do I remove the background from an image?",
    answer:
      "Simply upload your image on our website, and our app will automatically remove the background. You can then download the edited image.",
  },
  {
    question: "What image formats are supported?",
    answer: "We support all popular image formats including JPG, PNG, and BMP.",
  },
  {
    question: "Is the background removal process free?",
    answer:
      "You can remove the background and download the image in low resolution for free. For high-resolution downloads, you will need to purchase credits through our subscription plan.",
  },
  {
    question: "How do I purchase credits?",
    answer:
      "You can purchase credits by signing up for one of our subscription plans available on the pricing page.",
  },
  {
    question: "What are the subscription plans available?",
    answer:
      "We offer various subscription plans to suit your needs. Please visit our pricing page for detailed information on the available plans and pricing.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes, you can cancel your subscription at any time. After cancellation, you will still have access to your remaining credits until the end of your billing cycle.",
  },

  {
    question: "Is my uploaded image safe?",
    answer:
      "Yes, your uploaded images are safe and secure. We do not share your images with third parties and they are deleted from our servers after processing.",
  },
  {
    question: "How long does it take to remove the background from an image?",
    answer:
      "The background removal process is quick and typically takes a few seconds, depending on the size and complexity of the image.",
  },
  {
    question: "What if the background removal is not accurate?",
    answer:
      "While our app uses advanced algorithms to accurately remove backgrounds, results may vary depending on the image. You can provide feedback so we can improve our service.",
  },
  {
    question: "Can I use the app on my mobile device?",
    answer:
      "Yes, our app is mobile-friendly and can be used on both iOS and Android devices.",
  },
  {
    question: "What happens if I run out of credits?",
    answer:
      "If you run out of credits, you can purchase additional credits or upgrade your subscription plan to continue downloading high-resolution images.",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    plan_type: "Silver Plan",
    price: 45,
    duration: "every month",
    forWhom: "Individuals",
    providedValue: [
      {
        get: "100 credits",
      },
      {
        get: "Basic Support",
      },
    ],
  },
  {
    plan_type: "Gold Plan",
    price: 105,
    duration: "every month",
    forWhom: "Small Teams",
    providedValue: [
      {
        get: "300 credits",
      },
      {
        get: "Priority Support",
      },
      {
        get: "Advanced Tools",
      },
    ],
  },
  {
    plan_type: "Platinum Plan",
    price: 225,
    duration: "every month",
    forWhom: "Enterprises",
    providedValue: [
      {
        get: "1000 credits",
      },
      {
        get: "24/7 Support",
      },
      {
        get: "Dedicated Account Manager",
      },
      {
        get: "Access to Beta Features",
      },
    ],
  },
];

// for edited image show
export const categorNames = [
  {
    name: "Products",
    img: [
      "/editedImage/product-1.jpg",
      "/editedImage/product-2.jpg",
      "/editedImage/product-3.jpg",
      "/editedImage/product-4.jpg",
    ],
  },
  {
    name: "People",
    img: [
      "/editedImage/people-1.jpg",
      "/editedImage/people-2.jpg",
      "/editedImage/people-3.png",
      "/editedImage/people-4.jpg",
    ],
  },
  {
    name: "Animals",
    img: [
      "/editedImage/animal-1.jpg",
      "/editedImage/animal-2.jpg",
      "/editedImage/animals-4.jpg",
      "/editedImage/animals-3.png",
    ],
  },
  {
    name: "Cars",
    img: [
      "/editedImage/cars-image1.png",
      "/editedImage/cars-image2.png",
      "/editedImage/cars-image3.png",
      "/editedImage/cars-image4.png",
    ],
  },
];

export const clientInfo = [
  {
    name: "Sarah Williams",
    role: "Head of Marketing",
    image: "/client/client1.jpg",
    comment:
      "I am extremely impressed with the professionalism and expertise demonstrated by this company. They have consistently delivered high-quality results and exceeded our expectations.",
  },
  {
    name: "David Brown",
    role: "Operations Manager",
    image: "/client/client2.jpg",
    comment:
      "Their dedication to excellence and customer satisfaction is unparalleled. The team went above and beyond to ensure our needs were met, and the results speak for themselves.",
  },
  {
    name: "Emily Davis",
    role: "Product Manager",
    image: "/client/client3.png",
    comment:
      "This company has been an invaluable partner in our journey. Their insights, expertise, and support have been instrumental in our success. We look forward to continued collaboration.",
  },
];
