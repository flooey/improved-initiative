import { PromptQueue } from "../Commands/Prompts/PromptQueue";
import { Encounter } from "../Encounter/Encounter";
import { SpellLibrary } from "../Library/SpellLibrary";
import { PlayerViewClient } from "../Player/PlayerViewClient";
import { DefaultRules, IRules } from "../Rules/Rules";
import { TextEnricher } from "../TextEnricher/TextEnricher";

export function buildStatBlockTextEnricher(rules: IRules) {
    return new TextEnricher(jest.fn(), jest.fn(), jest.fn(), new SpellLibrary(null), rules);
}

export function buildEncounter() {
    const rules = new DefaultRules();
    const enricher = buildStatBlockTextEnricher(rules);
    const socket: any = {
        on: jest.fn(),
        emit: jest.fn()
    };
    
    const encounter = new Encounter(new PromptQueue(), new PlayerViewClient(socket), jest.fn().mockReturnValue(null), jest.fn(), rules, enricher);
    encounter.EncounterId = "test-encounter";
    return encounter;
}