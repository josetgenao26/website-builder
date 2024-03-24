import { Button } from "@/modules/common/components/button";
import Logo from "@/modules/common/components/logo";
import {
  CircleAlert,
  CircleUserRound,
  FileText,
  Image as ImageIcon,
  LayoutPanelLeft,
  Palette,
  Settings,
  SquarePlus,
} from "lucide-react";
import SidebarButton from "../components/sidebar-button";

type Props = {};

const SidebarLeft = (props: Props) => {
  return (
    <div className="flex bg-gray-100 font-sans text-gray-900" {...props}>
      <aside className="h-screen w-18 border-r border-gray-200 bg-white flex flex-col items-center">
        <div className="w-full h-18 flex items-center justify-center border-b border-gray-200">
          <Logo style="minimal" />
        </div>
        <nav className="flex flex-1 gap-y-4 pt-10 flex-col">
          <SidebarButton
            tootip="Add elements"
            letter="A"
            title="Add elements"
            active
          >
            <SquarePlus />
          </SidebarButton>
          <SidebarButton tootip="Layouts" letter="L" title="Layouts">
            <LayoutPanelLeft />
          </SidebarButton>
          <SidebarButton tootip="Themes" letter="C" title="Themes">
            <Palette />
          </SidebarButton>
          <SidebarButton tootip="Assets" letter="S" title="Assets">
            <FileText />
          </SidebarButton>
          <SidebarButton tootip="Images" letter="I" title="Images">
            <ImageIcon />
          </SidebarButton>
        </nav>
        <div className="flex flex-col items-center gap-y-4 py-10">
          <SidebarButton tootip="Help" letter="H" title="Help">
            <CircleAlert />
          </SidebarButton>
          <SidebarButton tootip="Setting" letter="T" title="Setting">
            <Settings />
          </SidebarButton>
          <Button
            variant="ghost"
            className="p-2 rounded-full overflow-hidden text-gray-400"
          >
            <CircleUserRound />
          </Button>
        </div>
      </aside>
    </div>
  );
};

export default SidebarLeft;
