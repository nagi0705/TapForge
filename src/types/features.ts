export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: {
    bgColor: string;
    iconColor: string;
    svgPath: string;
  };
}

export interface Benefit {
  id: string;
  title: string;
  metric: string;
  description: string;
  icon: {
    bgColor: string;
    iconColor: string;
    svgPath: string;
  };
  metricColor: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  price: string;
  description: string;
  priceColor: string;
}
