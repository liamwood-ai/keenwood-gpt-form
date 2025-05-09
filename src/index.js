import { useState } from "react";

export default function KeenwoodForm() {
  const [stage, setStage] = useState(0);
  const [form, setForm] = useState({
    name: "",
    company: "",
    website: "",
    industry: "",
    need: "",
    summary: "",
    challenges: [],
    explanation: "",
    features: "",
    timeline: "",
    budget: "",
    training: "",
    file: null
  });

  const next = () => setStage(stage + 1);
  const back = () => setStage(stage > 0 ? stage - 1 : 0);
  const update = (field, value) => setForm({ ...form, [field]: value });

  const handleFileChange = (e) => {
    update("file", e.target.files[0]);
  };

  const submit = () => {
    console.log("Submitted form:", form);
    alert("Form submitted – data logged to console. In production, this would send to Keenwood CRM and SharePoint.");
  };

  const stages = [
    {
      title: "Stage 1 – Basic Info",
      content: (
        <>
          <input placeholder="Full Name" onChange={(e) => update("name", e.target.value)} /><br />
          <input placeholder="Company Name" onChange={(e) => update("company", e.target.value)} /><br />
          <input placeholder="Company Website" onChange={(e) => update("website", e.target.value)} /><br />
          <input placeholder="Industry / Sector" onChange={(e) => update("industry", e.target.value)} /><br />
          <textarea placeholder="Briefly, what do you need help with?" onChange={(e) => update("need", e.target.value)} /><br />
        </>
      )
    },
    {
      title: "Stage 2 – Business Snapshot",
      content: (
        <>
          <textarea placeholder="Please confirm Keenwood's summary of your business" onChange={(e) => update("summary", e.target.value)} /><br />
        </>
      )
    },
    {
      title: "Stage 3 – Discovery",
      content: (
        <>
          <p>Select challenges:</p>
          <label><input type="checkbox" onChange={(e) => update("challenges", [...form.challenges, "Attracting new customers"])} /> Attracting new customers</label><br />
          <label><input type="checkbox" onChange={(e) => update("challenges", [...form.challenges, "Retaining customers"])} /> Retaining customers</label><br />
          <label><input type="checkbox" onChange={(e) => update("challenges", [...form.challenges, "Manual admin"])} /> Manual admin</label><br />
          <textarea placeholder="How does this impact your business?" onChange={(e) => update("explanation", e.target.value)} /><br />
        </>
      )
    },
    {
      title: "Stage 4 – Feature Priorities",
      content: (
        <>
          <textarea placeholder="List features and whether each is Required, Optional, or Not Needed." onChange={(e) => update("features", e.target.value)} /><br />
        </>
      )
    },
    {
      title: "Stage 5 – Budget & Timeline",
      content: (
        <>
          <select onChange={(e) => update("timeline", e.target.value)}>
            <option value="">Select timeline</option>
            <option>ASAP</option>
            <option>1–3 months</option>
            <option>Not urgent</option>
          </select><br />
          <select onChange={(e) => update("budget", e.target.value)}>
            <option value="">Select budget</option>
            <option>Under £2,000</option>
            <option>£2,000–£5,000</option>
            <option>£5,000–£10,000</option>
            <option>£10,000+</option>
          </select><br />
          <select onChange={(e) => update("training", e.target.value)}>
            <option value="">Training needs?</option>
            <option>Online</option>
            <option>In-house</option>
            <option>Not needed</option>
          </select><br />
        </>
      )
    },
    {
      title: "Final Upload & Submit",
      content: (
        <>
          <input type="file" onChange={handleFileChange} /><br />
          <button onClick={submit}>Submit</button>
        </>
      )
    }
  ];

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h2>{stages[stage].title}</h2>
      {stages[stage].content}
      <br />
      {stage > 0 && <button onClick={back}>Back</button>} {stage < stages.length - 1 && <button onClick={next}>Next</button>}
    </div>
  );
}