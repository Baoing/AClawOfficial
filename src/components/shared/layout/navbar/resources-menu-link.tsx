'use client';

import HoverBgTransform from '@/src/components/shared/hover-bg-transform';
import { cn } from '@/src/utils/cn';
import Link from 'next/link';
import type { ComponentType } from 'react';

export interface ResourcesMenuLinkProps {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  onClose?: () => void;
}

const isExternalHref = (href: string) => /^https?:\/\//i.test(href);

const ResourcesMenuLink = ({ label, href, icon: Icon, onClose }: ResourcesMenuLinkProps) => {
  const external = isExternalHref(href);

  return (
  <li>
    <Link
      href={href}
      onClick={onClose}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group relative flex items-center gap-2 rounded-[10px] p-3"
    >
      <HoverBgTransform className="group-hover:opacity-100" />
      <span className="relative z-10">
        <Icon className={cn('size-5 stroke-white/60 group-hover:stroke-white')} />
      </span>
      <span className="font-sora text-tagline-2 relative z-10 font-normal text-white">{label}</span>
    </Link>
  </li>
  );
};

export default ResourcesMenuLink;
