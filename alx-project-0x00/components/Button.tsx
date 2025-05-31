const Button: React.FC = () => {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Landing Page Buttons</h1>

      <div className="space-y-4">
        <h2 className="text-xl">Sizes</h2>
        <div className="flex gap-4">
          <Button title="Small" styles="text-sm px-3 py-1" />
          <Button title="Medium" styles="text-base px-4 py-2" />
          <Button title="Large" styles="text-lg px-6 py-3" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl">Shapes</h2>
        <div className="flex gap-4">
          <Button title="Rounded-sm" styles="rounded-sm" />
          <Button title="Rounded-md" styles="rounded-md" />
          <Button title="Rounded-full" styles="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
