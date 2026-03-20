import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

// Wrap a component in all required providers + MemoryRouter
const wrap = (ui: React.ReactElement, path = "/") => {
  const qc = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={qc}>
      <LanguageProvider>
        <MemoryRouter initialEntries={[path]}>{ui}</MemoryRouter>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

// ---------------------------------------------------------------------------
// Navbar
// ---------------------------------------------------------------------------
describe("Navbar", () => {
  it("renders main navigation links in English", () => {
    wrap(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders the PINECO brand name", () => {
    wrap(<Navbar />);
    expect(screen.getByText("PINECO")).toBeInTheDocument();
  });

  it("shows 'Get in Touch' CTA button", () => {
    wrap(<Navbar />);
    const btns = screen.getAllByText("Get in Touch");
    expect(btns.length).toBeGreaterThan(0);
  });

  it("switches nav links to Polish when PL flag is clicked", () => {
    wrap(<Navbar />);
    fireEvent.click(screen.getByTitle("Polski"));
    expect(screen.getByText("Strona główna")).toBeInTheDocument();
    expect(screen.getByText("O mnie")).toBeInTheDocument();
    expect(screen.getByText("Usługi")).toBeInTheDocument();
  });

  it("toggles mobile menu open", () => {
    wrap(<Navbar />);
    // Before opening: desktop links exist but mobile duplicates do not
    expect(screen.getAllByText("Home").length).toBe(1);

    // The hamburger button is the only button without a title or text
    const allButtons = screen.getAllByRole("button");
    const hamburger = allButtons.find(
      (btn) => !btn.title && btn.textContent === ""
    );
    expect(hamburger).toBeDefined();
    fireEvent.click(hamburger!);

    // After opening mobile menu, "Home" appears twice (desktop + mobile)
    expect(screen.getAllByText("Home").length).toBe(2);
  });
});

// ---------------------------------------------------------------------------
// HeroSection
// ---------------------------------------------------------------------------
describe("HeroSection", () => {
  it("renders English hero headline by default", () => {
    wrap(<HeroSection />);
    expect(screen.getByText("Small Seeds,")).toBeInTheDocument();
    expect(screen.getByText("Lasting Impact.")).toBeInTheDocument();
  });

  it("renders hero action buttons", () => {
    wrap(<HeroSection />);
    expect(screen.getByText("My Services")).toBeInTheDocument();
    expect(screen.getByText("Schedule a Consultation")).toBeInTheDocument();
  });

  it("renders Polish hero headline after language switch", () => {
    const qc = new QueryClient({ defaultOptions: { queries: { retry: false } } });
    render(
      <QueryClientProvider client={qc}>
        <LanguageProvider>
          <MemoryRouter>
            <Navbar />
            <HeroSection />
          </MemoryRouter>
        </LanguageProvider>
      </QueryClientProvider>
    );
    fireEvent.click(screen.getByTitle("Polski"));
    expect(screen.getByText("Małe nasiona,")).toBeInTheDocument();
    expect(screen.getByText("Trwały wpływ.")).toBeInTheDocument();
  });
});

// ---------------------------------------------------------------------------
// Page routing — each page renders its key content
// ---------------------------------------------------------------------------
describe("Pages render correctly", () => {
  it("Index page renders HeroSection content", () => {
    wrap(<Index />);
    expect(screen.getByText("Small Seeds,")).toBeInTheDocument();
  });

  it("About page renders Anna's name", () => {
    wrap(<About />);
    expect(screen.getByText("Anna Szyszkowska")).toBeInTheDocument();
  });

  it("Services page renders service names", () => {
    wrap(<Services />);
    expect(screen.getAllByText("Project Coordination").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Volunteering Management").length).toBeGreaterThan(0);
  });

  it("Contact page renders the send-message form", () => {
    wrap(<Contact />);
    expect(screen.getByText("Send Me a Message")).toBeInTheDocument();
  });

  it("NotFound page renders 404", () => {
    wrap(<NotFound />, "/this-does-not-exist");
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Oops! Page not found")).toBeInTheDocument();
  });
});

// ---------------------------------------------------------------------------
// Contact form
// ---------------------------------------------------------------------------
describe("Contact form", () => {
  it("renders all form input fields", () => {
    wrap(<Contact />);
    expect(screen.getByPlaceholderText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("jane@example.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your company name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Tell us about your project or enquiry...")).toBeInTheDocument();
  });

  it("updates input value when user types", () => {
    wrap(<Contact />);
    const nameInput = screen.getByPlaceholderText("Jane Doe") as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: "John Smith" } });
    expect(nameInput.value).toBe("John Smith");
  });

  it("clears form fields after successful submission", async () => {
    wrap(<Contact />);
    const nameInput = screen.getByPlaceholderText("Jane Doe") as HTMLInputElement;
    const emailInput = screen.getByPlaceholderText("jane@example.com") as HTMLInputElement;
    const messageInput = screen.getByPlaceholderText(
      "Tell us about your project or enquiry..."
    ) as HTMLTextAreaElement;

    fireEvent.change(nameInput, { target: { value: "John Smith" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, { target: { value: "I need help with my project." } });

    fireEvent.click(screen.getByText("Send Message"));

    await waitFor(() => {
      expect(nameInput.value).toBe("");
      expect(emailInput.value).toBe("");
      expect(messageInput.value).toBe("");
    });
  });

  it("does not clear form when required fields are missing", async () => {
    wrap(<Contact />);
    const nameInput = screen.getByPlaceholderText("Jane Doe") as HTMLInputElement;
    // Leave email and message empty
    fireEvent.change(nameInput, { target: { value: "John Smith" } });
    fireEvent.click(screen.getByText("Send Message"));

    await waitFor(() => {
      // Name field should still have the value (form was NOT cleared)
      expect(nameInput.value).toBe("John Smith");
    });
  });

  it("renders contact info (address, phone, email)", () => {
    wrap(<Contact />);
    expect(screen.getAllByText("Cambridge, UK").length).toBeGreaterThan(0);
    expect(screen.getAllByText("07500 378102").length).toBeGreaterThan(0);
    expect(screen.getAllByText("pineco.uk@gmail.com").length).toBeGreaterThan(0);
  });
});

// ---------------------------------------------------------------------------
// Language switching — full UI toggle
// ---------------------------------------------------------------------------
describe("Language switching", () => {
  it("switches entire Index page to Polish", () => {
    wrap(<Index />);
    fireEvent.click(screen.getByTitle("Polski"));
    expect(screen.getByText("Małe nasiona,")).toBeInTheDocument();
    expect(screen.getByText("Trwały wpływ.")).toBeInTheDocument();
  });

  it("switches back to English after PL → EN toggle", () => {
    wrap(<Index />);
    fireEvent.click(screen.getByTitle("Polski"));
    fireEvent.click(screen.getByTitle("English"));
    expect(screen.getByText("Small Seeds,")).toBeInTheDocument();
  });

  it("CTA section text changes with language", () => {
    wrap(<Index />);
    expect(screen.getByText("Ready to take the next step?")).toBeInTheDocument();
    fireEvent.click(screen.getByTitle("Polski"));
    expect(screen.getByText("Gotowa/y na kolejny krok?")).toBeInTheDocument();
  });
});
