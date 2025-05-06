import React from "react";

const Environment: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-50 text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-green-800">
          Greening Villages, Growing Futures
        </h1>
        <p className="text-lg mb-6">
          <strong>Grama Vana</strong> is an environment initiative by Karnataka Incubation Foundation that empowers rural communities to create their own forests and protect the environment.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Why This Matters:</h2>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>India loses 1.5 million hectares of forest cover every year due to deforestation and land misuse.</li>
            <li>Nearly 30% of India’s land is degraded, impacting agriculture and livelihoods.</li>
            <li>Groundwater levels in rural Karnataka have dropped by over 60% in the last two decades.</li>
            <li>Climate change and erratic rains are heavily affecting small farmers and rural life.</li>
            <li>Children are increasingly disconnected from nature, with little awareness of ecology and environment.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Key Focus Areas:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encouraging children to prepare saplings in soil packets and nurture them till ready for planting.</li>
            <li>Transforming unused village lands into green spaces through community plantation drives.</li>
            <li>Promoting eco-friendly practices to improve water resources and soil health.</li>
            <li>Engaging SHGs, schools, and youth in planting, protecting, and maintaining local forests.</li>
            <li>Conducting green festivals, awareness drives, and nature education sessions in villages.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Impact Created So Far:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Planted 11,000+ saplings across multiple villages.</li>
            <li>Many trees are now 4 years old and growing steadily, though still small in size.</li>
            <li>
              Even at this early stage, these young trees have helped absorb around 308 metric tons of carbon dioxide over 4 years.
            </li>
            <li>
              This is equivalent to reducing the emissions from about 66 cars in a year — showing how small efforts grow into big environmental benefits over time.
            </li>
          </ul>
        </section>

        <blockquote className="border-l-4 border-green-500 pl-4 italic text-green-700">
          “Every small tree planted today becomes a forest tomorrow.”
        </blockquote>
      </div>
    </div>
  );
};

export default Environment;
