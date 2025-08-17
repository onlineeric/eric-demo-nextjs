import Image from 'next/image';

export default function ImagesPage() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-2">Image Optimization</h2>
        <p>
          Next.js provides automatic image optimization with the <code>next/image</code> component.
          Images are lazy-loaded, responsive, and optimized for different screen sizes.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Basic Image Usage:</h3>
        <div className="border rounded p-4">
          <Image
            src="/demo-image.svg"
            alt="Demo image showing Next.js optimization"
            width={400}
            height={300}
            className="rounded"
          />
          <p className="text-sm text-gray-600 mt-2">
            Fixed size: 400x300px (original: 800x600px)
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Responsive Images:</h3>
        <div className="border rounded p-4">
          <Image
            src="/demo-image.svg"
            alt="Responsive demo image"
            width={800}
            height={600}
            className="w-full h-auto max-w-md rounded"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
          <p className="text-sm text-gray-600 mt-2">
            Responsive: adapts to container width (max 400px)
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Fill Container:</h3>
        <div className="border rounded p-4">
          <div className="relative w-full h-48 bg-gray-100 rounded overflow-hidden">
            <Image
              src="/demo-image.svg"
              alt="Fill container demo"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Fill container: uses object-cover to fill the available space
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Priority Loading:</h3>
        <div className="border rounded p-4">
          <Image
            src="/demo-image.svg"
            alt="Priority loaded image"
            width={300}
            height={225}
            priority
            className="rounded"
          />
          <p className="text-sm text-gray-600 mt-2">
            Priority: loaded immediately (use for above-the-fold images)
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">External Images:</h3>
        <div className="border rounded p-4">
          <Image
            src="https://picsum.photos/400/300"
            alt="External image from Picsum"
            width={400}
            height={300}
            className="rounded"
          />
          <p className="text-sm text-gray-600 mt-2">
            External image from picsum.photos (add domain to next.config.ts)
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-4 rounded">
        <h3 className="font-medium mb-2">Image Optimization Benefits:</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li><strong>Automatic optimization:</strong> WebP/AVIF formats when supported</li>
          <li><strong>Lazy loading:</strong> Images load as they enter the viewport</li>
          <li><strong>Responsive images:</strong> Different sizes for different screen densities</li>
          <li><strong>Placeholder:</strong> Blur-up effect while loading (with blurDataURL)</li>
          <li><strong>Layout shift prevention:</strong> Requires width/height or fill</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
        <h3 className="font-medium mb-2">Configuration Required:</h3>
        <p className="text-sm">
          For external images, add the domain to <code>next.config.ts</code>:
        </p>
        <pre className="bg-white p-2 rounded mt-2 text-xs overflow-x-auto">
{`images: {
  domains: ['picsum.photos'],
  // or use remotePatterns for more control
}`}
        </pre>
      </div>
    </section>
  );
}